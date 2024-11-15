import React from "react";
import { TopBar } from "./navs/TopBar";
import { Slide } from "./Slide";

export function Header()
{
    return(
        
        <div className="container-fluid px-0">
            <TopBar />
            <Slide />       
        </div>
        
    )
}