import React, { useEffect } from "react";
import { NavBarPanel } from "../components/navs/NavBar";
import { SlideBg } from "../components/panel/SlideBg";
import { MenuCollection } from "../components/navs/NavBar";
import { Footer } from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { SetProfil } from "../components/panel/Setting";


export function Profil()
{
    useEffect( ()=>{
        Aos.init({ duration: 2000 })
    } , [])


    return (

        <div className="bg-second">
            <NavBarPanel />
            <SlideBg />  
            <MenuCollection />

            <SetProfil /> 
            {/* **************************************************************************************************************** */}
            <div className="container-fluid bg-gradients py-5" >
                <div className="row d-flex justify-content-center" >
                    <div className="col-md-8 col-lg-6" data-aos="fade-up"> 
                        <div className="d-flex flex-column align-items-center border w-100 p-3"> <span className="ms-2 text-center color-white mb-3 px-4 h6"> Agro-space génère des informations personnalisées relative à l'itinéraire technique et au calendrier d'arrosage qui sera exécuté par le dispostif que nous avons conçu pour communiqué avec le sytème et assuré l'automatisation. Ce système a été dévelopé par le startup Xelkoom-AI dans l'espoir de booster ce secteur et fiabilisé les données qui en ressortent  </span> </div>
                        {/* <div className="mt-4 d-flex justify-content-center"> <a className="btn btn-basic rounded-2 py-3 px-5 shadow" href="/"> Apropos de Xelkoom-AI </a> </div> */}
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