import React from "react";

export function ChatBar()
{
    return(


        <div className="fixed-box"> 
            <div className="row d-flex justify-content-center"> 
                <div className="col-md-9"> 
                    <div className="row"> 
                        {/*  */}
                        <div className="col-12"> 
                            <div className="d-flex align-items-center w-100 p-3 shadow rounded-5 bg-white">
                                <input type="text" className="input-default w-100 px-3" placeholder="Entrer le text ici ..." required /> 
                                <button className="bg-white input-default d-flex justify-content-center align-items-center"> <img src='/img/icons8-jouer-64.png' width={25} height={25} alt="Logo"  className="img-center" /> </button>
                            </div>
                        </div>
                    </div> 
                </div>       
            </div>
        </div>


        // <form className="" >
        //     <div className="d-flex fixed-box gap-3" >
        //         <div className="d-flex"> 
        //             <div className="row d-flex flex-column align-items-center w-100 p-2 gap-2 shadow-sm rounded-5 bg-white">
        //                 <div className="col-2"> <img src='/img/icons8-jouer-64.png' width={25} height={25} alt="Logo"  className="img-center" /> </div>
        //                 <div className="col-10"> <input type="text" className="form-control none-border" placeholder="Entrer le text ici ..." required /> </div>   
        //             </div>
        //             <button className="bg-white shadow-md d-flex justify-content-center align-items-center"> <img src='/img/icons8-jouer-64.png' width={25} height={25} alt="Logo"  className="img-center" /> </button>
        //         </div>
        //     </div>
        // </form>

    )
}