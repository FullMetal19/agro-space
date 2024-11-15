import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from "../components/Footer";
import Lottie from "lottie-react";
import leaf from '../assets/leaf.json';
import { UserRegistration } from '../config/Auth';
// import { Alert } from "../components/Alert";


export function Signup(){

    const navigate = useNavigate();
    const [ inputs, setInputs ] = useState();
    const [checkState, setCheckState] = useState(true)

    const [ response, setResponse ] = useState();

    const handleInputs = ( event ) => {
        const { name , value } =  event.target ;
        setInputs( { ...inputs, [name] : value  } ) ; 
    }
  
    const handleForm = async ( event ) => {
        event.preventDefault();
        if( inputs.pswd === inputs.cpswd )
        {
            try {
                await UserRegistration( inputs )
                navigate('/demande-activation-compte')
            }   catch (err) {
                setResponse(0)
                console.error("Error signing up:", err);
            }            
            console.log( inputs )
        }
        else setResponse(-1)
    } 
    

    return (

        <div>
            {/* ************************************************************************ */}
            <div className="container-fluid bg-second pb-5" >
                <div className="row py-3 d-flex justify-content-center" > 
                    <div className="col-lg-7" >
                        <div className="row px-4" >
                           
                            {/* ************************************************************************ */}
                            <div className="col-md-12 mb-4 bg-white border py-4 px-5" >
                                <div className="row d-flex justify-content-between align-items-center" > 
                                    {/* ************************************************************************ */}
                                    <div className="col-md-8" > 
                                        <div className="d-flex flex-column border-left ps-2 ms-1" > 
                                            <span className="h4 color-fifth"> Agro-space </span>
                                            <span className="color-gray"> Remplir le formulaire pour la creation de votre compte </span>
                                        </div>
                                    </div>
                                    {/* ************************************************************************ */}
                                    <div className="col-md-2 mb-2 d-flex justify-content-center align-items-center size-md" > 
                                        <div className="size-min"> <Lottie animationData={ leaf } />  </div>
                                    </div>
                                </div>
                            </div> 

                            {/* ************************************************************************ */}
                            <div className="col-md-12 mb-4 border bg-white p-5" >
                                <form className="" onSubmit={ handleForm }>
                                    <div className="row" >
                                        {/* ************************************************************************ */}
                                        <div className="col-lg-12 mb-3 form-outline  d-flex flex-column"> 
                                            <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Prénom <span className='color-fifth' > * </span> </span>
                                            <input type="text" name="fname" className="form-control" placeholder="prénom" required onChange={ handleInputs } /> 
                                        </div>
                                        {/* ************************************************************************ */}
                                        <div className="col-lg-6 mb-3 form-outline  d-flex flex-column"> 
                                            <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Nom <span className='color-fifth' > * </span> </span>
                                            <input type="text" name="lname" className="form-control" placeholder="nom" required onChange={ handleInputs } />
                                        </div>
                                        {/* ************************************************************************ */}
                                        <div className="col-lg-6 mb-3 form-outline  d-flex flex-column"> 
                                            <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Sexe <span className='color-fifth' > * </span> </span>
                                            <select class="form-select" name='sex' aria-label="Default select example" onChange={ handleInputs }>
                                                <option value="masculin" > sexe </option>
                                                <option value="masculin" > Masculin </option>
                                                <option value="feminin" > Féminin </option>
                                            </select>
                                        </div>
                                        {/* ************************************************************************ */}
                                        <div className="col-lg-6 mb-3 form-outline  d-flex flex-column"> 
                                            <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Numéro de téléphone <span className='color-fifth' > * </span> </span>
                                            <input type="text" name="phone" className="form-control" placeholder="770000000" onChange={ handleInputs } />
                                        </div>
                                        {/* ************************************************************************ */}
                                        <div className="col-lg-6 mb-3 form-outline  d-flex flex-column"> 
                                            <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Email  <span className='color-fifth' >( c'est optionel) </span> </span>
                                            <input type="email" name="email" className="form-control" placeholder="email" onChange={ handleInputs } />
                                        </div>
                                        {/* ************************************************************************ */}
                                        <div className="col-lg-6 mb-3 form-outline  d-flex flex-column"> 
                                            <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Mot de passe <span className='color-fifth' > * </span> </span>
                                            <input type="password" minLength={8} name="pswd" className="form-control" placeholder="nom" required onChange={ handleInputs } />
                                        </div>
                                        {/* ************************************************************************ */}
                                        <div className="col-lg-6 mb-4 form-outline  d-flex flex-column"> 
                                            <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Confirmer le mot de passe <span className='color-fifth' > * </span> </span>
                                            <input type="password" minLength={8} name="cpswd" className="form-control" placeholder="confirmer mot de passe" required onChange={ handleInputs } />
                                        </div>
                                        {/* ************************************************************************ */}
                                        <div className="col-lg-8 mb-5 d-flex gap-2"> 
                                            <input type="checkbox"  className="form-check-input color-fifth"  id="ckecker1" onClickCapture={ ()=>{ checkState ? setCheckState(false) : setCheckState(true)  } } />
                                            <label className="color-gray text-start " for="ckecker1" > j'accepte les conditions d'utilisation </label>
                                        </div>
                                        {/* ************************************************************************ */}
                                        <div className="col-lg-12 form-outline d-flex flex-column"> 
                                            <div className="d-flex justify-content-end"> 
                                                <button type="submit" disabled={ checkState }  className="btn btn-fifth"> Enregistrer </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* ************************************************************************ */}
                            <div className="col-md-12 mb-4 p-0" >
                            {
                                ( response === 0 )  ?
                                ( <div className='alert alert-danger'> Une erreur est survenue lors de la creation de compte. Veillez réessayer </div> ) :
                                ( response === -1 ) ?
                                ( <div className='alert alert-warning'> Erreur! veillez revoir votre mot de passe et la confirmation </div> ) : null
                            }      
                            </div>

                        </div> 
                    </div> 
                </div>
            </div>  

            {/* **************************************************************************************************************** */}
            <div className="container-fluid bg-darks" >
                <Footer />
            </div>

        </div> 

    )
}




                    
                        /* {
                           ( error === 'success' ) ? 
                           ( <Alert text={'Veillez consulter votre messagerie un code de validation vous sera envoyé pour finaliser la creation de votre compte'} /> ) :
                           ( error === 'error' ) ?
                           ( <Alert text={'Une erreur est survenue lors de la creation de votre veillez rééssayer s\'il vous plait'} /> ) :
                           ( error === 'psw not matched' ) ?
                           ( <Alert text={'Erreur! veillez revoir votre mot de passe et la confirmation'} /> )
                           : null
                        } */
 
 
