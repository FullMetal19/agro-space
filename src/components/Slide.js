import React from "react";
import Lottie from "lottie-react";
import agriAnimation from '../assets/AI.json';

export function Slide() 
{
    return (

        <div className="container-fluid slides size pt-2">
            <div className="container">
                <div className="row mt-4 d-flex justify-content-between px-4">
                    <div className="col-lg-6 d-flex flex-column aligns-items-center justify-content-center mt-5"> 
                        <span className="color-white mt-4 pe-4 h5 text-hover" data-aos="fade-down"> Use the online image color picker </span>
                        <span className="display-4 bold color-white text-hover" data-aos="fade-down"> Use the online image color picker above </span>
                    </div>
                    <div className="col-lg-5 d-flex aligns-item-center hide"> 
                        <div className="hide"> <Lottie animationData={ agriAnimation } /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}