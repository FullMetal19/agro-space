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



const generateCalendar = (startAt, duration, water) => {

    const start = new Date(startAt);
    let calendarObj = {};
    let calendarEndAt = 0; // New object to store generated dates
    let dateKey = 0

    for (let i = 0; i < duration; i++) {

        let newDate = new Date(start);
        newDate.setDate(start.getDate() + i);
        dateKey = newDate.toISOString().split('T')[0]
        let content = {
            morning: {
                water: water,
                state: 0,
                startAt: 0,
                endAt: 0
            },
            afternoon: {
                water: water,
                state: 0,
                startAt: 0,
                endAt: 0
            }
        };  
        calendarObj[dateKey] = content;
        calendarEndAt = dateKey
      }

    return [ calendarEndAt, calendarObj ]
};


    const handleInputs = ( event ) => {
        setResponse(false)
        const { name , value } =  event.target ;
        setInputs( { ...inputs, [name] : value   } ) ;
    }
    
    const handleForm = async ( event ) => {
        event.preventDefault();
        const docRef = doc(db, "projects", pid); 
        const docSnap = await getDoc(docRef);
    
        // if (docSnap.exists()) {
        //     const address = docSnap.data().address
        //     const region = docSnap.data().region
        //
        //   const data = {
        //     address : address,
        //     region : region,
        //     area : inputs.area,
        //     sname : inputs.sname,
        //     soiltype : inputs.soiltype,
        //     startAt : inputs.startAt
        //   }
        //   console.log(data)
        // try {
        //     const res = await axios.post('https://example.com/api', data);
        //     setApiData(res.data);
        //     } catch (error) {
        //     console.error("Error posting data:", error); }
        //   console.log("Document data:", docSnap.data());
        // } else {
        //     console.log("project not found");
        // }

        const water = 200 // litre   apiData.water
        const startAt =  inputs.startAt
        const duration =  40 // days  apiData.ndays

        const desc = "survenue lors de l'ajout. Veillez réessayer à nouveau. survenue lors de l'ajout. Veillez réessayer à nouveau. survenue lors de l'ajout. Veillez réessayer à nouveau."
        const fertilizer = "survenue lors de l'ajout. Veillez réessayer à nouveau. survenue lors de l'ajout. Veillez réessayer à nouveau. survenue lors de l'ajout. Veillez réessayer à nouveau."
        const phyto = " survenue lors de l'ajout. Veillez réessayer à nouveau. survenue lors de l'ajout. Veillez réessayer à nouveau. survenue lors de l'ajout. Veillez réessayer à nouveau. survenue lors de l'ajout. Veillez réessayer à nouveau."

        const [ endAt, calendar ] = generateCalendar ( startAt, duration, water)
        // console.log( endAt  )
        // console.log( calendar  )
        try {
            const sid = await addSpeculation ( pid, inputs, duration, endAt )
            await addToCalendars(sid, inputs.sname, inputs.startAt , duration, endAt, calendar) 
            await addITK(sid, inputs.sname, desc, fertilizer, phyto)
            setResponse(1)
        } catch (error) {
            setResponse(0)
        }
    }


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