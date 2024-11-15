import React, { useState } from "react";
import { SpecyForm, DeviceForm } from "./Form";


export function Modal({ method })
{

    const [state , setState] = useState(true)

    return(
        <div className="modal-container">
            <div className="container pt-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5 col-md-7 d-flex flex-column">

                        <div className="text-end"> <button className='btn btn-sm btn-fifth bold mb-2' onClick={ ()=>{ method ( false ) } } > X </button> </div>

                        <div className="d-flex bg-white mt-2 mb-4">
                            <div className="w-100 d-flex flex-column border-end"> 
                                <span className={ state ? "colored-bar mb-1" : "grey-bar mb-1" } />
                                <span className="color-fifth py-2 cursor" onClick={ ()=>{ setState(true) } } > Culture  </span>
                            </div>
                            <div className="w-100 d-flex flex-column border-end"> 
                                <span className={ state ? "grey-bar mb-1" : "colored-bar mb-1" } />
                                <span className="color-fifth py-2 cursor" onClick={ ()=>{ setState(false) } } > Appareil  </span>
                            </div>
                        </div>

                        <div className="bg-white"> { state ? (<SpecyForm />) : (<DeviceForm />) } </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export function VideoModal({ method})
{
    return(
        <div className="modal-container">
            <div className="container pt-5">
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-8 bg-three-clr p-4 d-flex flex-column">
                        <div className="text-end"> <button className='btn btn-sm btn-fifth bold mb-2' onClick={ ()=>{ method ( false ) } } > X </button> </div>
                        <iframe height="350" src="http://127.0.0.1:8001/" className="img-slide" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}