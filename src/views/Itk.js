import React, {useState, useEffect} from "react";
import { NavBarPanel } from "../components/navs/NavBar";
import { DashboardBarMenu } from "../components/navs/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { Footer } from "../components/Footer";
import { Button,Collapse } from 'react-bootstrap';

import { useParams } from "react-router";
import { findAllSpeculations } from "../config/SpeculationModal";
import { rdb } from "../config/DBconfig";
import { ref, get } from 'firebase/database';
import { getITKById } from "../config/ITKModal";

export function Itk()
{

    const [open, setOpen] = useState(false);
    const { pid } = useParams();
    const [data, setData] = useState(null);
    const [speculation, setSpeculation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(false);


    const findAllspe = async ()=>{
        const pdata = await findAllSpeculations( pid )
        setState( true )
        setSpeculation(pdata)
    }

    useEffect(() => { findAllspe() }, [])
        
    const fetchData = async ( arg ) => {
        try {
            const res = await getITKById(arg)
            setData(res)
            setLoading(true);
          } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (

        <div className="bg-second" > 

            <NavBarPanel />

            <DashboardBarMenu />

            <div className ="container"> 
                <div className="py-5" >
                    {/* ********************************************************************************************* */}
                    <div className="row card shadow-sm mb-5 mt-4">
                        <div className="col-12 d-flex border-bottom mb-2 p-2"> 
                            <Dropdown drop="end">
                                <Dropdown.Toggle variant="default" id="dropdown-basic"> <span  className="color-gray fs-s"> Filtre culture </span> </Dropdown.Toggle>
                                { state ? (

                                <Dropdown.Menu>
                                    {
                                        speculation.map( (row, index)=>{
                                            return(

                                                <Dropdown.Item key={index} onClick={ ()=>{ fetchData( row.sid ) } }  > { row.sname } </Dropdown.Item>
                                            )
                                        } )
                                    }
                                </Dropdown.Menu>

                            )  : null 
                            }
                            </Dropdown>  
                        </div>
                        {/* ********************************************************************************************* */}
                        <div className="col-12 p-4 ">

                            {
                                loading ? ( 

                            <div className="d-flex flex-column gap-4 px-4 py-2" >                             

                                <span className="h3 color-fifth bg-second border py-2 px-4"> Itinéraire technique de : { data.sname }   </span>

                                <div className="d-flex flex-column gap-4 px-4" > 

                                    <div className="d-flex flex-column gap-2" > 
                                        <span className="ms-2 color-fifth border-left ps-2"> Descriptions de la culture </span> 
                                        <div className="d-flex rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray mb-3"> { data.desc } </span> </div>
                                    </div>

                                    <div> 
                                        <div onClick={() => setOpen(!open)} aria-controls="collapse-content" aria-expanded={open} variant="default" className="d-flex align-items-center mb-1 w-100 border px-4 py-3 cursor"> 
                                            <span  className="color-gray fs-s"> les fertilisants </span>
                                        </div>
                                        <Collapse in={open}>
                                            <div id="collapse-content" className="rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray mb-3"> { data.fertilizer } </span> </div>
                                        </Collapse>
                                    </div>

                                    <div> 
                                        <div onClick={() => setOpen(!open)} aria-controls="collapse-content" aria-expanded={open} variant="default" className="d-flex align-items-center mb-1 w-100 border px-4 py-3 cursor"> 
                                            <span  className="color-gray fs-s">  les traitements phytosanitaires </span>
                                        </div>
                                        <Collapse in={open}>
                                            <div id="collapse-content" className="rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray mb-3">  { data.phyto }  </span> </div>
                                        </Collapse>
                                    </div>

                                </div> 

                            </div>  
                              
                            ) : (  <div className="d-flex my-4" > <span className="border py-3 px-5 text-center shadow-sm w-100">  Veillez choisir la culture de votre choix en cliquant sur le bouton de filtrage  </span>  </div> )
                             
                            }
                               
                        </div>
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