import React, { useEffect } from "react";
import { NavBarPanel } from "../components/navs/NavBar";
import { Footer } from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css"
import { ChatBar } from "../components/panel/Chat";


export function ChatBot()
{
    useEffect( ()=>{
        Aos.init({ duration: 2000 })
    } , [])


    return (

        <div className="bg-second">

            <NavBarPanel />

            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-3 col-lg-2 border-end border-bottom py-3" >
                        <span className="menu-btn"> <img src='/img/icons8-jouer-64.png' width={25} height={25} alt="Logo"  className="img-center" /> </span>
                        <div className="hide-md" >
                            <div className="d-flex flex-column pt-2 pb-4 hide-md" >
                                <span className="mb-2 rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start"> precedente discussion 1... </span>
                                <span className="mb-2 rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start"> precedente discussion 2... </span> 
                                <span className="mb-2 rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start"> precedente discussion 3... </span>
                                <span className="mb-2 rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start"> precedente discussion 4... </span> 
                            </div>
                        </div>
                    </div>
                    {/* ******************************************************************************** */}
                    <div className="col-md-9 col-lg-10 vh-100" >
                        <div className="row p-4" >
                            <div className="col-12 mb-4" > 
                                <span className="ms-2 color-fifth fs-s border-left ps-2"> Ceci est un chat bot </span> 
                                <div className="d-flex rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray fs-s mb-3"> Posez des questions qui vous préoccupent en rapprt avec l'itinéraire technique des cultures Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous </span> </div>
                            </div>
                            <div className="col-12 mb-4" > 
                                <span className="ms-2 color-fifth fs-s border-left ps-2"> Votre question </span> 
                                <div className="d-flex rounded-2 bg-fifth p-3 mt-1 border" > <span className="color-white fs-s mb-3"> Posez des questions qui vous préoccupent en rapprt avec l'itinéraire technique des cultures Vous n'avez pas de projet pour l'instant. Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous </span> </div>
                            </div>
                            <div className="col-12 mb-4" > 
                                <span className="ms-2 color-fifth fs-s border-left ps-2"> Voici une réponse de votre question </span> 
                                <div className="d-flex rounded-2 bg-white p-3 mt-1 border" > <span className="color-gray fs-s mb-3"> Posez des questions qui vous préoccupent en rapprt avec l'itinéraire technique des cultures Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous Vous n'avez pas de projet pour l'instant. Créez en un en cliquant sur le box ci-dessous </span> </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>

            

            <ChatBar /> 

            {/* **************************************************************************************************************** */}
            <div className="container-fluid bg-darks" >
                <Footer />
            </div>

        </div>
    )
}