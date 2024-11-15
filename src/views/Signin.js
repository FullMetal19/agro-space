import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import leaf from '../assets/leaf.json';
import { Footer } from '../components/Footer';
import { Authentication, getUserById } from '../config/Auth';

export function Signin()
{
    const navigate = useNavigate();
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
            const res = await Authentication( inputs )
            const credential = await getUserById( res.user.uid )
            sessionStorage.setItem("uid", res.user.uid );

            sessionStorage.setItem("fname", credential.fname );
            sessionStorage.setItem("lname", credential.lname );
            sessionStorage.setItem("phone", credential.phone );
            sessionStorage.setItem("sex", credential.sex );
            sessionStorage.setItem("email", credential.email );
            sessionStorage.setItem("token", res.user.accessToken );

            navigate('/panel')
        } catch (error) {
            setResponse(true)
        }
    } 


    return (

    <div>        
        <div className="container-fluid bg-second pt-4 pb-5">
            <div className="d-flex justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="row d-flex justify-content-center" > 
                        <div className="col-3 sml-size mb-2" > 
                            <Lottie animationData={ leaf } />
                        </div>
                    </div>
                    {/* <!-- head of form  --> */}
                    <div className="d-flex justify-content-center p-3 bg-white mt-2 mb-4 border gap-3">
                        <div className="d-flex align-items-center align-self-center gap-2">
                            <span className="h2 color-fifth" > Agro-space  </span>
                        </div>
                    </div>
                    
                    {
                        ( response ) ? ( <div className='alert alert-warning'> Erreur de connexion! veillez revoir vos informations de connexion </div> ) : null
                    }

                    {/* <!-- form  --> */}
                    <form className="border p-4 card mb-4 " onSubmit={ handleForm }>

                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-3 mt-1">
                            <input type="email" name="email" className="form-control" placeholder="email" required onChange={ handleInputs } />
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4">
                            <input type="password" name="pswd" className="form-control" placeholder="password" required onChange={ handleInputs } />
                        </div>

                        {/* <!-- New account --> */}
                        <div className="mb-4 d-flex ps-2">
                            <span className='color-gray'> Avez vous un compte ? </span>
                            <a href="/nouveau-compte" className="link color-fifth"> créez en maintenant </a>
                        </div>

                        {/* <!-- Submit button --> */}
                        <div className="d-flex ps-2"> <button type="submit" className="btn btn-fifth mb-2">  Se-connecter </button> </div>
                    
                    </form>

                    {/* <!-- New account --> */}
                    <div className="mb-4 text-center border shadow-sm p-3 bg-gradients">
                        <span className='color-white'> Mot de passe oublié ? </span>
                        <a href="/forgotten-password" className="link link-outline"> changez maintenant </a>
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