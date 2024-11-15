import React, { useState, useEffect } from "react";
import { DeviceForm, SpecyForm } from "../root/Form";
import { UpdateProject } from "../../config/ProjectModal";
import { getProjectById } from "../../config/ProjectModal";
import { useParams } from "react-router";
import { removeDeviceFromSpeculation } from "../../config/DeviceModal";
import { db } from "../../config/DBconfig";

import { doc, updateDoc, arrayUnion, arrayRemove, serverTimestamp} from 'firebase/firestore';

export function BoardForm()
{
    const [state , setState] = useState(true)
    const { pid } = useParams()

    return(

        <div className="row shadow-sm p-4 d-flex align-items-center flex-column card">

            <div className="row d-flex bg-white mt-2">
                <div className="col-6 d-flex flex-column border p-0"> 
                    <span className={ state ? "colored-bar mb-1" : "grey-bar mb-1" } />
                    <span className="color-fifth fs-s ps-2 py-2 cursor" onClick={ ()=>{ setState(true) } } > Culture  </span>
                </div>
                <div className="col-6 d-flex flex-column border p-0"> 
                    <span className={ state ? "grey-bar mb-1" : "colored-bar mb-1" } />
                    <span className="color-fifth fs-s ps-2 py-2 cursor" onClick={ ()=>{ setState(false) } } > Appareil  </span>
                </div>
            </div>

            <div className="row p-0"> { state ? (<SpecyForm pid={pid} />) : (<DeviceForm pid={pid} />) } </div>
                        
        </div>
    )
}


export function ModificationForm( { soiltype, flowrate } )
{
    const [ response, setResponse ] = useState(false);
    const [ inputs, setInputs ] = useState( null );
    
    const [soil, setSoil] = useState(soiltype)
    const [flow, setFlow] = useState(flowrate)

    const handleInput = ( event ) => {
        setResponse(false)
        const { name , value } =  event.target ;
        setInputs( { ...inputs, [name] : value   } ) ;
    }
    
    // const handleForm = async ( event ) => {
    //     event.preventDefault();
    //     console.log( inputs )
    //     try {
    //         await UpdateProject ( pid, inputs )
    //         setResponse(1)
    //     } catch (error) {
    //         setResponse(0)
    //     }
    // } 

    return (

    <form className="bg-white pb-4 pt-3 px-2">

        <div className="mb-3"> <span className="color-gray" > Formulaire de modification </span> </div>
         {/* <!--text input --> */}
        <div className="form-outline mb-3 d-flex flex-column"> 
            <span className="fs-xs color-fifth text-start mb-1 border-left px-2" > Type de sol </span>
            <input type="text" name="soiltype" value={ soil } className="form-control" placeholder="sol sableux" required onChange={ handleInput } /> 
        </div>
        {/* <!--text input --> */}
        <div className="form-outline mb-4 d-flex flex-column"> 
            <span className="fs-xs color-fifth text-start mb-1 border-left px-2" > Debit du motopompe </span>
            <div class="input-group">
                <input type="text" name="flow" value={ flow } className="form-control" placeholder="200" required onChange={ handleInput } />
                <span class="input-group-text fs-s"> litre / heure </span>
            </div>  
        </div>
        {/* <!-- Submit button --> */}
        <div className="d-flex"> 
            <button type="submit" className="btn btn-sm btn-fifth"> enregistrer </button> 
        </div>

    </form>
    )
}


export function Devices({ sid, devices })
{
    const [ value, setValue] = useState( null)
    console.log( devices  )

    async function delDevice( did ) {
       
        setValue(did)
         console.log(value)
 
        const docRef = doc(db, 'speculations', sid);
        console.log(docRef)
        // if (did !== undefined && did !== null) {
        //     await updateDoc(docRef, {
        //         device: arrayRemove( did )
        //     });
        // }

        // if (did !== undefined && did !== null) {
        //     await removeDeviceFromSpeculation( sid, did )
        //     console.log( did )
        // }
    }

    return (

    <div className="bg-white pb-4 pt-3 px-2">

        <div className="mb-3"> <span className="color-gray" > Les appareils connectés </span> </div>
        {
            ( Array.isArray(devices) && devices.length === 0 ) ? ( <span className="alert alert-warning mb-4"> Pas d'appareils assignés à ce culture </span>  ) : 
            ( Array.isArray(devices) && devices.length === 1 ) ?  
            (

                <div className="d-flex align-items-center justify-content-between w-100 border px-4 py-2 mb-3" > 
                    <div className="row w-100"> <span  className="color-gray fs-s"> { devices } </span> </div>
                    <button className="btn btn-sm btn-fifth" > x </button>                                 
                </div>

            ) : null 
        }
        {
            devices.map((device, key) => {

                return (

                <div className="d-flex align-items-center justify-content-between w-100 border px-4 py-2 mb-3" key={key} > 
                    <div className="row w-100"> <span  className="color-gray fs-s"> { device } </span> </div>
                    <button className="btn btn-sm btn-fifth" onClick={ delDevice(device) } > x </button>                                 
                </div>

            )})
        }         
    </div>
    )
}



export function ProjectForm({ pid })
{
    const [ response, setResponse ] = useState(false);
    const [ inputs, setInputs ] = useState( null );

    const getData = async ()=>{
        const data = await getProjectById( pid )
        setInputs(data)
    }

    useEffect( ()=>{ getData() }, [] )


    const handleInputs = ( event ) => {
        setResponse(false)
        const { name , value } =  event.target ;
        setInputs( { ...inputs, [name] : value   } ) ;
    }
    
    const handleForm = async ( event ) => {
        event.preventDefault();
        try {
            await UpdateProject ( pid, inputs )
            setResponse(1)
        } catch (error) {
            setResponse(0)
        }
    } 


    return (

        <div className="d-flex flex-column px-2 mb-4" > 
            {/* <span className="color-gray fs border w-100 py-1 px-2 mb-1"> Liste projets </span> */}
            
            <div className="row"  >
                {/* ********************************************************************************************* */} 
                <div className="col-12 d-flex justify-content-end my-3" > <span className="color-gray fs border py-1 ps-4 pe-5 mb-1"> Modifier les informations du projet </span> </div>
              
                {/* ************************************************************************ */}
                <div className="col-md-12 mb-3" >
                    {
                        ( response === 1 )  ?
                        ( <div className='alert alert-success'> Le projet a été mis à jour avec success </div> ) :
                        ( response === 0 ) ?
                        ( <div className='alert alert-danger'> Une erreur est survenue lors de la mise à jour du projet. Veillez réessayer à nouveau.  </div> ) : null
                    }
                </div>
         
            { ( inputs !== null ) ? (
               
                <div className="col-md-12 mb-4" >
                    <form className="">
                        <div className="row" >
                            {/* ************************************************************************ */}
                            <div className="col-lg-12 mb-3 form-outline  d-flex flex-column"> 
                                <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Nom du projet <span className='color-fifth' > * </span> </span>
                                <input type="text" name="pname" value={ inputs.pname } className="form-control" placeholder="xelkom-AI" required onChange={ handleInputs } /> 
                            </div>
                            {/* ************************************************************************ */}
                            <div className="col-lg-6 mb-3 form-outline d-flex flex-column"> 
                                <span className="fs-xs color-gray text-start mb-1 border-left px-2" > La superficie de l'exploitation <span className='color-fifth' > * </span> </span>
                                <div class="input-group">
                                    <input type="text" name="area" value={ inputs.area } className="form-control" placeholder="2" required onChange={ handleInputs } />
                                    <div class="input-group-append"> <span class="input-group-text" id="basic-addon2">en ha </span> </div>
                                </div>
                            </div>
                            
                            {/* ************************************************************************ */}
                            <div className="col-lg-6 mb-3 form-outline d-flex flex-column"> 
                                <span className="fs-xs color-gray text-start mb-1 border-left px-2" > La région où l'exploitattion se trouve <span className='color-fifth' > * </span> </span>
                                <select class="form-select" name='region' value={ inputs.region } aria-label="Default select example" onChange={ handleInputs } >
                                    <option value="masculin" > Thies </option>
                                    <option value="feminin" > Saint Louis </option>
                                    <option value="feminin" > Fatick </option>
                                    <option value="feminin" > Kaolack </option>
                                    <option value="feminin" > Kaffrine </option>
                                    <option value="feminin" > Louga </option>
                                </select>
                            </div>
                            {/* ************************************************************************ */}
                            <div className="col-lg-6 mb-3 form-outline  d-flex flex-column"> 
                                <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Adresse de l'exploitation  <span className='color-fifth' > * </span> </span>
                                <input type="text" name="address" value={ inputs.address } className="form-control" placeholder="" required onChange={ handleInputs } />
                            </div>
                            {/* ************************************************************************ */}
                            <div className="col-lg-6 mb-3 form-outline  d-flex flex-column"> 
                                <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Autre numéro de téléphone joignable <span className='color-fifth' > ( c'est optionel ) </span> </span>
                                <input type="text" name="sndphone" value={ inputs.sndphone } className="form-control" placeholder="770000000" onChange={ handleInputs } />
                            </div>
                            {/* ************************************************************************ */}
                            <div className="col-lg-12 form-outline d-flex flex-column"> 
                                <div className="d-flex justify-content-end mt-4"> 
                                    <button onClick={ handleForm } className="btn btn-fifth"> Enregistrer </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            ) : null }
                
            </div>
        </div>
    )
}

