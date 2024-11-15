import React from "react";

export function Footer()
{
    return(

        <div className="row d-flex justify-content-between p-4 gap-2"> 
            <div className="col-lg-5 col-md-5 d-flex gap-3">
                <span className="color-fifth"> Build by Xelkoom-AI </span>
                <span className="border"></span>
                <a href="" className="link-outline"> Condition d'utilisation </a>    
            </div>
            <div className="col-lg-4 col-md-4 d-flex justify-content-end">
                <span className="color-fifth"> Copyright © 2024  </span>    
            </div>
        </div>
    )
}