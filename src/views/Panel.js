import React, { useEffect } from "react";
import { NavBarPanel } from "../components/navs/NavBar";
import { SlideBg } from "../components/panel/SlideBg";
import { MenuCollection } from "../components/navs/NavBar";
import { Project } from "../components/panel/Project";
import { Footer } from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css"


export function Panel()
{
    useEffect( ()=>{
        Aos.init({ duration: 2000 })
    } , [])


    return (

        <div className="bg-second">
            <NavBarPanel />
            <SlideBg />  
            <MenuCollection />
            <Project />

            {/* **************************************************************************************************************** */}
            <div className="container-fluid bg-gradients py-5" >
                <div className="row d-flex justify-content-center" >
                    <div className="col-md-8 col-lg-6" data-aos="fade-up"> 
                        <div className="d-flex flex-column align-items-center border w-100 p-3"> <span className="ms-2 text-center color-white mb-3 px-4 h6"> Use the online image color picker above to select a color and get the HTML Color Code of this pixel. Also you get the HEX color code value, RGB value and HSV value you get the HEX color code value, RGB value you get the HEX color code value, RGB value </span> </div>
                        <div className="mt-4 d-flex justify-content-center"> <a className="btn btn-basic rounded-2 py-3 px-5 shadow" href="/"> Apropos de Xelkoom-AI </a> </div>
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