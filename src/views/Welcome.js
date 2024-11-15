import React from "react";
import Lottie from "lottie-react";
import leaf from '../assets/leaf.json';


export function Welcome()
{
   return (

    <div className="container-fluid bg-second" > 
        <div className="row d-flex justify-content-center"> 
            <div className="col-6"> 
                <div className="h-large d-flex flex-column align-items-center justify-content-center "> 
                    <div className="size-md mb-2" > <Lottie animationData={ leaf } /> </div>
                    <div className="d-flex justify-content-center align-items-center mb-3"> <span  className="color-gray display-6 bold"> Bienvenue Agro-space  </span>  </div>
                    <div className='alert alert-warning mb-5 text-center'> Veillez consulter votre votre boite mail, un code de validation vous sera envoyé pour finaliser la creation de votre compte </div>
                    <div className="d-flex justify-content-center align-items-center"> <a className="btn btn-basic px-4 rounded-4" href="/connexion"> se-connecter maintenant </a> </div>
                </div>
            </div>
        </div>                          
    </div>

   )
}