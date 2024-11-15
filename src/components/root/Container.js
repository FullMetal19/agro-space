import React from "react";
import Lottie from "lottie-react";



export function Container({ img, title, text })
{

    return(

        <div className="row px-5 mb-5"> 
            <div className="col-md-7" data-aos="fade-up" > 
                <img src={ img } alt="Logo" className="d-inline-block align-text-top img-fluid" />
            </div>
            <div className="col-md-5 d-flex align-items-center" data-aos="fade-up"> 
                <div className="d-flex flex-column p-4"> 
                    <span className="h1 color-darks text-start mb-3"> { title } </span>
                    <span className="color-darks text-start"> { text } </span>
                </div>
            </div>
        </div>
    )
}


export function ReverseContainer({ img, title, text })
{
    return(

        <div className="row px-5 mb-5"> 
            <div className="col-md-5 d-flex align-items-center" data-aos="fade-up"> 
                <div className="d-flex flex-column p-4"> 
                    <span className="h1 color-darks text-start mb-3"> { title } </span>
                    <span className="color-darks text-start"> { text } </span>
                </div>
            </div>
            <div className="col-md-7" data-aos="fade-up" > 
                <img src={ img } alt="Logo" className="d-inline-block align-text-top img-fluid" />
            </div>
        </div>
    )
}



export function LottieContainer({ lottieAnim, title, text })
{
    return(

    <div className="container"> 
        <div className="row mb-4 d-flex justify-content-between"> 
            <div className="col-md-5" data-aos="fade-up" > 
                <Lottie animationData={ lottieAnim } />
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center" data-aos="fade-up"> 
                <div className="d-flex flex-column aligns-item-center p-4"> 
                    <span className="h1 color-basic mb-3"> { title } </span>
                    <span className="color-basic"> { text } </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export function ReverseLottieContainer({ lottieAnim, title, text })
{
    return(

    <div className="container"> 
        <div className="row mb-4 d-flex justify-content-between"> 
            <div className="col-md-5 d-flex align-items-center justify-content-center"> 
                <div className="d-flex flex-column aligns-item-center px-4" > 
                    <span className="h1 color-blacks mb-3"> { title } </span>
                    <span className="ccolor-blacks"> { text } </span>
                </div>
            </div>
            <div className="col-md-5"> 
                <Lottie animationData={ lottieAnim } />
            </div> 
        </div>
    </div>
    )
}