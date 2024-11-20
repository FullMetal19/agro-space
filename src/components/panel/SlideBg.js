import React from "react";

export function SlideBg () 
{
    return (

        <div className="container-fluid bg-img pt-2">
            <div className="container">
                <div className="row mt-4 px-4">
                    <div className="col-lg-9"> 
                        <div className="row">  
                            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center"> 
                                <img src='/img/bg-img2.jpg' alt="Logo" className="rounded-img hide-md" />
                            </div>   
                            <div className="col-md-8 d-flex flex-column text-md-hover">  
                                <span className="color-white fs-lg"> { sessionStorage.getItem('fname') + " " + sessionStorage.getItem('lname') } </span>
                                <span className="color-white mb-2 fs-s"> { sessionStorage.getItem('email') } </span>
                                <span className="color-white mb-2 fs"> AgroSpace pour un projet agricole abouti, un rendement optimisé et une automatisation de l'activité. </span>
                                <div> <a className="btn btn-fifth py-2 px-4 shadow-sm" href="/profile"> Mon profile </a> </div>  
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}