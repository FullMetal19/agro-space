import React from "react";

export function Box({ title })
{
    return(

        <div className="d-flex flex-column justify-content-center align-items-center borders w-100 p-4"> 
            <div className="d-flex justify-content-center align-items-center rounded-circle bg-gradients dim-80"> 
                <img src={ '../img/service.png' } alt="Logo" width={40} height={40} className="d-inline-block align-text-top img-fluid" />
            </div>
            <span className="h5 text-center color-second mt-2"> { title } </span>
        </div>
    )
}


export function Card({ img, title, text })
{
    return(

        <div className="d-flex flex-column justify-content-center align-items-center border w-100 py-2"> 
            <img src={ img } alt="Logo" className="d-inline-block align-text-top img-fluid" />
            <span className="h5 color-darks"> { title } </span>
            <span className="text-center color-darks color-second mb-4 p-3"> { text } </span>
        </div>
    )
}