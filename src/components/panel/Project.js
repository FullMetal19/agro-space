import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import leaf from '../../assets/leaf.json';
import { addProject, getProjects } from "../../config/ProjectModal";


export function Project()
{
    const [ state, setState] = useState(1)

    return (

        <div className="container py-5">
            <div className="row d-flex justify-content-between mb-5">
                
                {/* ********************************************************************************************* */}
                <div className="col-lg-8">
                    <div className="bg-white rounded-2 border mb-4">
                        <div className="row d-flex flex-column p-4"> 
                            <div className="col-12 d-flex border-bottom mb-2"> 
                                <span className={ (state === 1) ? "border-down py-2 px-3 color-fifth fs-s cursor" : "cursor py-2 px-3 color-gray fs-s" } onClick={ ()=> setState(1) } > Projets </span>
                                <span className={ (state === 2) ? "border-down py-2 px-3 color-fifth fs-s cursor" : "cursor py-2 px-3 color-gray fs-s" } onClick={ ()=> setState(2) } > Aide </span>
                                <span className={ (state === 3) ? "border-down py-2 px-3 color-fifth fs-s cursor" : "cursor py-2 px-3 color-gray fs-s" } onClick={ ()=> setState(3) } > Configuration </span>
                            </div>
                        </div>
                        {/* ********************************************************************************************* */}
                        <div className="px-4 ">
                            {
                                (state === 1) ? ( <ProjectsViews method={ ()=> setState(3) } /> ) : (state === 2) ? ( <HelpViews /> ) : ( <ConfigViews /> )
                            } 
                            
                        </div>
                        {/* ********************************************************************************************* */}
                    </div>
                </div>

                {/* ********************************************************************************************* */}
                <div className="col-lg-4 d-flex flex-column"> 
                    {/* ********************************************************************************************* */}
                    <div className="border d-flex flex-column bg-white rounded-2 p-4 mb-4"> 
                        <div className="row mb-2" >
                            <div className="col-3 col-lg-2 sml-size mb-2 d-flex justify-content-center align-items-center p-0" > <Lottie animationData={ leaf } /> </div>
                            <div className="col-9 col-lg-10 d-flex align-items-center p-0" > <span className="h4 color-fifth"> Agro-space </span> </div>
                        </div>
                        <div className="mb-3" > <span className="color-gray"> Use the online image color picker the online image color picker the online image color picker the online image the online image color picker the online image color picker the online image color picker the online image the online image color picker the online image color picker the online image color picker the online image </span> </div>
                        <div className="mb-2" > <span className="color-fifth bold"> By team xelkom-AI </span> </div>
                    </div>
                    {/* ********************************************************************************************* */}
                    <div className="border d-flex flex-column bg-white rounded-2 p-4 mb-4"> 
                        <div className="mb-2" ><span className="fs bold color-gray"> Statistique </span> </div>
                        <div className="mb-3" > <span className="color-gray"> Use the online er the online image the online image color picker the online image color picker the online image color picker the online image the online image color picker the online image color picker the online image color picker the online image </span> </div>
                        <div className="mb-2 d-flex justify-content-end" > <span className="color-gray fs-s text-end"> By team xelkom-AI </span> </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}


{/* ************************************* A DEFINED FUNCTION ******************************************************** */} 
function ProjectsViews({ method })
{
    const [ data, setData ] = useState([])

    const getData = async()=>{
    
        const res = await getProjects()
        setData( res )
        console.log(res)
    } 

    useEffect( ()=>{ getData()  }, [] );

    return (

        <div className="d-flex flex-column px-2 mb-4" > 
            <span className="color-gray fs border w-100 py-1 px-2 mb-3"> Liste projets </span>
            {
                ( Array.isArray(data) && data.length === 0 ) ? ( <span className="alert alert-warning mb-4"> Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous </span>  ) : null 
            }
            <div className="row pt-2" >
                {/* ********************************************************************************************* */} 
                <div className="col-md-6 mb-4" > 
                    <div className="bg-second border p-5 rounded-2 d-flex align-items-center cursor justify-content-center" onClick={ method } > <span className="color-gray text-center display-6"> + </span> </div>
                </div>
                {/* ********************************************************************************************* */}
                {
                    data.map((item, key) => {
                        return (
                            <div className="col-md-6 mb-4" key={ key } > 
                                <div className="bg-white shadow-sm p-4 rounded-2 d-flex flex-column" height={ 300 } > 
                                    <span className="color-fifth fs"> Projet :  {item.pname} </span>
                                    <span className="color-gray fs-s mb-3"> Lieu : {item.address} </span>                   
                                    <div className="border-top pt-1 d-flex justify-content-between align-items-center" > 
                                        <span className="color-gray fs-xs"> Crée le : {item.createdAt} </span>  
                                        <a className='btn btn-sm btn-fifth' href={ '/panel/' + item.pid } > Plus </a>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }
                
            </div>
        </div>
    )
}

{/* ************************************* A DEFINED FUNCTION ******************************************************** */} 
function    HelpViews()
{
    return (

        <div className="d-flex flex-column px-2 mb-4" > 
            {/* <span className="color-gray fs border w-100 py-1 px-2 mb-1"> Liste projets </span> */}
            
            <div className="row"  >
                {/* ********************************************************************************************* */} 
                <div className="col-12 mb-4" > 
                    <span className="ms-2 color-fifth fs-s border-left ps-2"> Comment créer un nouveau projet </span> 
                    <div className="d-flex rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray fs-s mb-3"> Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous </span> </div>
                </div>
                {/* ********************************************************************************************* */} 
                <div className="col-12 mb-4" > 
                    <span className="ms-2 color-fifth fs-s border-left ps-2"> Que représente un projet </span> 
                    <div className="d-flex rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray fs-s mb-3"> Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous </span> </div>
                </div>
                {/* ********************************************************************************************* */} 
                <div className="col-12 mb-4" > 
                    <span className="ms-2 color-fifth fs-s border-left ps-2"> quelle est la durée de validité d'un projet </span> 
                    <div className="d-flex rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray fs-s mb-3"> Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous </span> </div>
                </div>
            </div>
        </div>
    )
}


{/* ************************************* A DEFINED FUNCTION ******************************************************** */} 
function ConfigViews()
{
    const [ inputs, setInputs ] = useState();
    const [ response, setResponse ] = useState(false);

    const handleInputs = ( event ) => {
        setResponse(false)
        const { name , value } =  event.target ;
        setInputs( { ...inputs, [name] : value   } ) ;
    }
    
    const handleForm = async ( event ) => {
        event.preventDefault();
        console.log( inputs )
        try {
            await addProject( inputs )
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
                <div className="col-12 mb-4 d-flex justify-content-end" > <span className="color-gray fs border py-1 ps-2 pe-5 mb-1"> Creer un nouveau projet </span> </div>
              
                {/* ************************************************************************ */}
                <div className="col-md-12 mb-4" >
                    {
                        ( response === 1 )  ?
                        ( <div className='alert alert-success'> Projet créé avec success </div> ) :
                        ( response === 0 ) ?
                        ( <div className='alert alert-danger'> Une erreur est survenue lors de la creation du projet. Veillez réessayer à nouveau.  </div> ) : null
                    }
                </div>

                {/* ************************************************************************ */}
                <div className="col-md-12 mb-4" >
                    <form className="">
                        <div className="row" >
                            {/* ************************************************************************ */}
                            <div className="col-lg-12 mb-3 form-outline  d-flex flex-column"> 
                                <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Nom du projet <span className='color-fifth' > * </span> </span>
                                <input type="text" name="pname" className="form-control" placeholder="xelkom-AI" required onChange={ handleInputs } /> 
                            </div>
                            {/* ************************************************************************ */}
                            <div className="col-lg-6 mb-3 form-outline d-flex flex-column"> 
                                <span className="fs-xs color-gray text-start mb-1 border-left px-2" > La superficie de l'exploitation <span className='color-fifth' > * </span> </span>
                                <div class="input-group">
                                    <input type="text" name="area" className="form-control" placeholder="2" required onChange={ handleInputs } />
                                    <div class="input-group-append"> <span class="input-group-text" id="basic-addon2">en ha </span> </div>
                                </div>
                            </div>
                            
                            {/* ************************************************************************ */}
                            <div className="col-lg-6 mb-3 form-outline d-flex flex-column"> 
                                <span className="fs-xs color-gray text-start mb-1 border-left px-2" > La région où l'exploitattion se trouve <span className='color-fifth' > * </span> </span>
                                <select class="form-select" name='region' aria-label="Default select example" onChange={ handleInputs } >
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
                                <input type="text" name="address" className="form-control" placeholder="" required onChange={ handleInputs } />
                            </div>
                            {/* ************************************************************************ */}
                            <div className="col-lg-6 mb-3 form-outline  d-flex flex-column"> 
                                <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Autre numéro de téléphone joignable <span className='color-fifth' > ( c'est optionel ) </span> </span>
                                <input type="text" name="sndphone" className="form-control" placeholder="770000000" onChange={ handleInputs } />
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
                
            </div>
        </div>
    )
}



