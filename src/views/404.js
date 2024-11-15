import React from "react";
import Lottie from "lottie-react";
import leaf from '../assets/leaf.json';


export function Error()
{
   return (

    <div className="container-fluid bg-second" > 

        <div className="h-large d-flex flex-column align-items-center justify-content-center "> 

            <div className="size-md" > 
                <Lottie animationData={ leaf } />
            </div>
            <div className="d-flex justify-content-center align-items-center mb-2"> 
                <span  className="color-gray display-1 bold"> 404 </span> 
            </div>
            <div className="d-flex justify-content-center align-items-center"> 
                <span  className="color-fifth bold"> Agro-space </span> 
            </div>

        </div>
                                
    </div>

   )
}