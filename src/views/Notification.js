import React, {useState, useEffect} from "react";
import { NavBarPanel } from "../components/navs/NavBar";
import { DashboardBarMenu } from "../components/navs/TopBar";
import { Footer } from "../components/Footer";
import { Collapse } from 'react-bootstrap';
import { useParams } from "react-router";
import { rdb } from "../config/DBconfig";
import { ref, get } from 'firebase/database';


export function Notification()
{

    const [open, setOpen] = useState(false);

    const { pid } = useParams();
    const [mdata, setmData] = useState(null);
    const [adata, setaData] = useState(null);

    {/* ********************************************************************************************* */}  

    const [openIndexes, setOpenIndexes] = useState({});

    // Toggle function to update the open state for each item individually
    const toggleOpen = (index) => {
      setOpenIndexes((prevOpenIndexes) => ({
        ...prevOpenIndexes,
        [index]: !prevOpenIndexes[index], // Toggle the specific item's open state
      }));
    };

    {/* ********************************************************************************************* */} 

    const findAllNotif = async ()=>{
        try {
            const path =  "Notifications/" + pid ;
            const documentRef = ref(rdb, path); 
            const snapshot = await get(documentRef);            
            if (snapshot.exists()) {

                const dataArray1 = Object.keys(snapshot.val().morning).map((did) => ({
                    did,
                    ...snapshot.val().morning[did],
                }));
                setmData(dataArray1);
                console.log(dataArray1 )

                const dataArray2 = Object.keys(snapshot.val().afternoon).map((did) => ({
                    did,
                    ...snapshot.val().afternoon[did],
                }));
                console.log(dataArray2 )
                setaData(dataArray2);

            } else {
              console.log('No data available');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => { findAllNotif() }, [])


    return (

        <div className="bg-second" > 

            <NavBarPanel />

            <DashboardBarMenu />

            <div className ="container"> 
                <div className="px-4 py-5" >
                    {/* ********************************************************************************************* */}
                    <div className="row card shadow-sm">
                        <div className="col-12 d-flex border-bottom mb-2 p-2"> <span className="color-gray fs ps-4"> Notifications </span>  </div>
                        <div className="col-12 p-4">
                        <div className="alert alert-success mb-3">  <span className=""> Notifications du matin </span>  </div>
                        {
                            (Array.isArray(mdata)  ) ? (

                            mdata.map((row, index)=>(

                                <div className="mb-4" key={index}> 
                                    <div  onClick={() => toggleOpen(index)}  aria-controls={`collapse-content-${index}`} aria-expanded={!!openIndexes[index]}  variant="default" className="d-flex align-items-center mb-1 w-100 border shadow-sm px-4 py-2 cursor gap-4"> 
                                        <div className="color-gray bg-fifth img-box-s" > <img src={'/img/notification.png'} width={15} height={15} alt="Logo"  className="img-center" /> </div> 
                                        <div className="row w-100"> 
                                            <div className="col-md-6" > <span  className="color-gray fs-s"> Notification : { row.sname } </span> </div>
                                            <div className="col-md-6" > <span  className="color-gray fs-s text-end"> Appareil : { row.did } </span> </div>
                                        </div>
                                    </div>
                                    <Collapse in={!!openIndexes[index]}>
                                        <div id={`collapse-content-${index}`} className="d-flex flex-column rounded-2 bg-second p-3 mt-1 border" > 
                                            <span className="color-gray mb-2"> { row.message } </span> 
                                            <span className="color-gray text-end fs-xs"> { row.createdAt } </span> 
                                        </div>
                                    </Collapse>
                                </div>
                            ))
                        ): null
                        }
                            
                        <div className="alert alert-success mb-3 mt-5">  <span className=""> Notifications du soir </span>  </div>

                        {
                             (Array.isArray(mdata)  ) ? (

                            adata.map((row, index)=>(

                                <div className="mb-4" key={index}> 
                                    <div onClick={() => setOpen(!open)} aria-controls="collapse-content" aria-expanded={open} variant="default" className="d-flex align-items-center mb-1 w-100 border shadow-sm px-4 py-2 cursor gap-4"> 
                                        <div className="color-gray bg-fifth img-box-s" > <img src={'/img/notification.png'} width={15} height={15} alt="Logo"  className="img-center" /> </div> 
                                        <div className="row w-100"> 
                                            <div className="col-md-6" > <span  className="color-gray fs-s"> Notification : { row.createdAt } </span> </div>
                                            <div className="col-md-6" > <span  className="color-gray fs-s text-end"> Appareil : { row.did } </span> </div>
                                        </div>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="collapse-content" className="rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray"> { row.message } </span> </div>
                                    </Collapse>
                                </div>
                            ))
                        ): null
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