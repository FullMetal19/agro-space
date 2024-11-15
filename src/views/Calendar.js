import React, {useEffect, useState} from "react";
import { CalendarTable } from "../components/Dashboard/Table";
import { NavBarPanel } from "../components/navs/NavBar";
import { DashboardBarMenu } from "../components/navs/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { Footer } from "../components/Footer";
import { useParams } from "react-router";
import { findAllSpeculations } from "../config/SpeculationModal";

import { rdb } from "../config/DBconfig";
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';


export function Calendar()
{
    const { pid } = useParams();
    console.log(pid)
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
            const path =  "Calendars/" + arg ;
            const documentRef = ref(rdb, path); 
            const snapshot = await get(documentRef);
            console.log(path)
            
            if (snapshot.exists()) {
              setData(snapshot.val());
              setLoading(true);
            } else {
              console.log('No data available');
            }
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

                                <span className="text-shadow text-center border py-2 px-4"> Calendrier d'arrosage de : { data.sname }  </span>
                                <CalendarTable data={ data.calendar } />

                            </div>
                            ) : (  <div className="d-flex my-4" > <span className="border py-3 px-5 text-center shadow-sm w-100">  Veillez choisir le calendier d'arosage de la culture de votre choix en cliquant sur le bouton de filtrage  </span>  </div> )
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