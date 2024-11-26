import React, { useState, useEffect } from "react";
import { addSpeculation, addToCalendars, getSpeculations } from "../../config/SpeculationModal";
import { addDeviceToSpeculation, addDeviceToRealtimeDB } from "../../config/DeviceModal";
import { db } from "../../config/DBconfig";
import { doc, getDoc} from 'firebase/firestore';
import axios from 'axios';
import { addITK } from "../../config/ITKModal";

export function SpecyForm({ pid })
{
    const [ response, setResponse ] = useState(false);
    const [ inputs, setInputs ] = useState( null );
    const [ apiData, setApiData ] = useState();



const generateCalendar = (startAt, duration, waterNeeds) => {
    const start = new Date(startAt);
    let calendarObj = {};
    let calendarEndAt = 0;
    let dateKey = 0;
    let phaseIndex = 0;

    for (let i = 0; i < duration; i++) {
        let newDate = new Date(start);
        newDate.setDate(start.getDate() + i);
        dateKey = newDate.toISOString().split('T')[0];

        // Vérifier si on dépasse la durée d'une phase
        if (i >= waterNeeds[phaseIndex].duration) {
            // Passer à la phase suivante seulement si nous ne dépassons pas les limites
            if (phaseIndex < waterNeeds.length - 1) {
                phaseIndex++;
            }
        }

        // Vérifier si currentPhase est défini
        const currentPhase = waterNeeds[phaseIndex];
        if (!currentPhase) {
            console.error('currentPhase est undefined ou nul à phaseIndex:', phaseIndex);
            continue;
        }

        console.log('Phase actuelle:', currentPhase);

        const dailyWaterNeed = currentPhase.water_need_perday;

        let content = {
            morning: {
                water: dailyWaterNeed / 2,
                state: 0,
                startAt: 0,
                endAt: 0
            },
            afternoon: {
                water: dailyWaterNeed / 2,
                state: 0,
                startAt: 0,
                endAt: 0
            }
        };

        calendarObj[dateKey] = content;
        calendarEndAt = dateKey;
    }

    return [calendarEndAt, calendarObj];
};



    const handleInputs = ( event ) => {
        setResponse(false)
        const { name , value } =  event.target ;
        setInputs( { ...inputs, [name] : value   } ) ;
    }
    

    const handleForm = async (event) => {
        event.preventDefault();
        
        try {
            // Étape 1 : Récupérer les données Firebase
            const docRef = doc(db, "projects", pid);
            const docSnap = await getDoc(docRef);
    
            if (!docSnap.exists()) {
                console.error("Projet non trouvé");
                return;
            }
    
            const projectData = docSnap.data();
            const data = {
                zone: projectData.region || "Dakar",
                planting_date: inputs.startAt,
                area: parseFloat(inputs.area),
                crop: inputs.sname || "Oignon"
            };
    
            // Étape 2 : Appeler l'API pour obtenir les détails
            const apiUrl = `http://127.0.0.1:8001/cultures/${data.crop}/details`;
            const res = await axios.post(apiUrl, data);
            const apiResponse = res.data;
            setApiData(apiResponse); // Stocker la réponse API
            console.log(apiResponse)
    
            // Étape 3 : Générer le calendrier des besoins en eau
            const waterNeeds = apiResponse.water_needs.water_needs;
            const startAt = inputs.startAt;
    
            // Calcul de la durée totale (additionner la durée de chaque phase)
            let totalDuration = 0;
            waterNeeds.forEach(phase => {
                totalDuration += phase.duration;
            });
    
            // Générer le calendrier avec la durée totale et les besoins en eau
            const [endAt, calendar] = generateCalendar(startAt, totalDuration, waterNeeds);
            console.log("Calendrier généré :", calendar);
    
            // Étape 4 : Sauvegarder dans Firebase
            const sid = await addSpeculation(pid, inputs, totalDuration, endAt);
            console.log(sid)
            await addToCalendars(sid, apiResponse.culture_name, inputs.startAt, totalDuration, endAt, calendar);
            await addITK(sid, apiResponse.culture_name, apiResponse.description, apiResponse.fertilisation, apiResponse.phytosanitary);
    
            setResponse(1); // Succès
        } catch (error) {
            console.error("Erreur lors du traitement :", error);
            setResponse(0); // Échec
        }
    };
    
    


    return(

        <form className="bg-white">

            <div className="my-4"> <span className="color-gray" > Ajouter une culture </span> </div>
            {/* ************************************************************************ */}
            <div className="d-flex" >
                {
                    ( response === 1 )  ?
                    ( <div className='alert alert-success'> Le projet a été ajouté au projet </div> ) :
                    ( response === 0 ) ?
                    ( <div className='alert alert-danger'> Une erreur est survenue lors de l'ajout. Veillez réessayer à nouveau.  </div> ) : null
                }
            </div>
            {/* <!--text input --> */}
            <div className="form-outline my-3 d-flex flex-column"> 
                <span className="fs-xs color-fifth text-start mb-1 border-left px-2" > Nom de la spéculation </span>
                <input type="text" name="sname" className="form-control" placeholder="Patate douce" required onChange={ handleInputs } /> 
            </div>
            {/* <!--text input --> */}
            <div className="form-outline mb-3 d-flex flex-column"> 
                <span className="fs-xs color-fifth text-start mb-1 border-left px-2" > Type de sol </span>
                <input type="text" name="soiltype" className="form-control" placeholder="sol sableux" required onChange={ handleInputs } /> 
            </div>
            {/* <!--text input --> */}
            <div className="form-outline mb-3 d-flex flex-column"> 
                <span className="fs-xs color-fifth text-start mb-1 border-left px-2" > Choisir la date de semi </span>
                <input type="date" name="startAt" className="form-control" placeholder="sol sableux" required onChange={ handleInputs } /> 
            </div>
            {/* <!--text input --> */}
            <div className="form-outline mb-4 d-flex flex-column"> 
                <span className="fs-xs color-fifth text-start mb-1 border-left px-2" > La surface allouée à ce culture </span>
                <div class="input-group">
                    <input type="number" name="area" className="form-control" placeholder="5000" required onChange={ handleInputs } />
                    <span class="input-group-text fs-s"> m2 </span>
                </div>  
            </div>
            {/* <!--text input --> */}
            <div className="form-outline mb-4 d-flex flex-column"> 
                <span className="fs-xs color-fifth text-start mb-1 border-left px-2" > Debit du motopompe </span>
                <div class="input-group">
                    <input type="number" name="flow" className="form-control" placeholder="200" required onChange={ handleInputs } />
                    <span class="input-group-text fs-s"> litre / heure </span>
                </div>  
            </div>
            {/* <!-- Submit button --> */}
            <div className="d-flex justify-content-end"> 
                <button type="submit" className="btn btn-sm btn-fifth" onClick={ handleForm } > enregistrer </button> 
            </div>

        </form>
    )
}


export function DeviceForm({ pid })
{

    const [ resp, setResp ] = useState(false);
    const [ input, setInput ] = useState( null );

    const handleInputs = ( event ) => {
        setResp(false)
        const { name , value } =  event.target ;
        setInput( { ...input, [name] : value   } ) ;
    }
    
    const handleForm2 = async ( event ) => {
        event.preventDefault();

        if (input !== undefined && input !== null) {
         
            try {
                addDeviceToSpeculation( input )
                await addDeviceToRealtimeDB( pid, input )
                setResp(1)
            } catch (error) {
                setResp(0)
            }
        }
    } 

      
    const [ data, setData ] = useState([])

    const getData = async()=>{
    
        const res = await getSpeculations({ pid })
        // console.log( res )
        setData( res )
    } 
    useEffect( ()=>{ getData()  }, [] );


    return(

        <form className="bg-white" >

            <div className="my-4"> <span className="color-gray" > Configurer un appareil </span> </div>
            {/* ************************************************************************ */}
            <div className="d-flex" >
                {
                    ( resp === 1 )  ?
                    ( <div className='alert alert-success'> L'appareil est désormais affecté à cette culture </div> ) :
                    ( resp === 0 ) ?
                    ( <div className='alert alert-danger'> Une erreur est survenue lors de l'ajout. Veillez réessayer à nouveau.  </div> ) : null
                }
            </div>
            {/* <!--text input --> */}
            <div className="form-outline my-3 d-flex flex-column"> 
                <span className="fs-xs color-fifth text-start mb-1 border-left px-2" > Numéro d'identifiant de l'appareil </span>
                <input type="text" name="did" className="form-control" placeholder="X0012345667k" required onChange={ handleInputs } /> 
            </div>
            {/* <!--text input --> */}
            <div className="form-outline mb-4 d-flex flex-column"> 
                <span className="fs-xs color-fifth text-start mb-1 border-left px-2" > Nom de la spéculation à affecter à l'appareil </span>
                <select class="form-select" name='sid' aria-label="Default select example" onChange={ handleInputs } >
                    <option value="" > Choisissez une culture  </option>
                    {
                        data.map( (item, key)=>{
                            return ( <option value={ item.sid } key={key}> { item.sname } </option> )
                        })
                    }                
                </select> 
            </div>
            {/* <!-- Submit button --> */}
            <div className="d-flex justify-content-end"> 
                <button onClick={ handleForm2 } className="btn btn-sm btn-fifth"> enregistrer </button> 
            </div>
            
        </form>
    )
}