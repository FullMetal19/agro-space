import React, { useState, useEffect } from "react";
import { NavBarPanel } from "../components/navs/NavBar";
import { DashboardBarMenu } from "../components/navs/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "../components/Footer";
import { useParams } from "react-router";
import { Devices, ModificationForm, ProjectForm } from "../components/Dashboard/Forms";
import { delProject } from "../config/ProjectModal";
import { useNavigate } from 'react-router-dom';
import { getSpeculations } from "../config/SpeculationModal";


export function Settings()
{
    const { pid } = useParams()
    const navigate = useNavigate();

    const [checkStateForDel, setCheckStateForDel] = useState(true)

    const removeProject = ()=>{
        delProject(pid)
        navigate('/panel')
    }

    {/* ********************************************************************************************* */}  

    const [checkState, setCheckState] = useState({}); // Initialize as an object

    const handleCheckboxChange = (key) => {
        setCheckState(prevState => ({
            ...prevState,
            [key]: !prevState[key] // Toggle the specific key's state
        }));
    };
 
    {/* ********************************************************************************************* */}  

    const [buttonState, setButtonState] = useState({}); // Initialize as an object to hold button states for each item

    const handleButtonClick = (key, isCulture) => {
        setButtonState(prevState => ({
            ...prevState,
            [key]: isCulture // Set to true if "Culture" is selected, false if "Appareil"
        }));
    };


 {/* ********************************************************************************************* */}    
    const [ data, setData ] = useState([])

    const getData = async()=>{
    
        const res = await getSpeculations({ pid })
        setData( res )
    } 
    useEffect( ()=>{ getData()  }, [] );



    return (

        <div className="bg-second" > 

            <NavBarPanel />

            <DashboardBarMenu />

            <div className ="container"> 
                <div className="row py-5">
                    <div className="col-md-12 d-flex">
                        <span className="color-fifth h4 bg-second border w-100 bg-white py-3 px-4"> Parametre du projet </span> 
                    </div>
                    <div className="col-md-12 d-flex mb-4">
                        <div className="d-flex flex-column bg-white border w-100 shadow-sm rounded-2">
                            <div className="d-flex align-items-center justify-content-between border-bottom py-2 px-3"> 
                                <div className="d-flex align-items-center gap-2"> 
                                    <input type="checkbox"  className="form-check-input color-fifth"  id="ckecker" onClickCapture={ ()=>{ checkStateForDel ? setCheckStateForDel(false) : setCheckStateForDel(true)  } } />
                                    <label className="color-gray text-start " for="ckecker" > Activer le bouton de suppression du projet </label>
                                </div>
                                <button disabled={ checkStateForDel } className="btn btn-sm btn-fifth" onClick={ removeProject } > supp </button>  
                            </div>
                            <div className="px-5"> <ProjectForm pid={ pid } /> </div>  
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* ********************************************************************************************* */}    
            <div className ="container"> 
                <div className="row pb-5">
                    <div className="col-md-12 d-flex">
                        <span className="color-fifth h4 bg-second border w-100 bg-white py-3 px-4"> Parametre des cultures </span> 
                    </div>
                    <div className="col-md-12 d-flex px-3">
                    {
                        ( Array.isArray(data) && data.length === 0 ) ? ( <span className="alert alert-warning mb-4"> Aucune culture n'a été ajouté à ce jour dans ce projet. Veillez ajouter une nouvelle culture </span>  ) : null 
                    }
                    </div>
                    {/* ********************************************************************************************* */}    
                    {
                    data.map((item, key) => {

                        return (
                    
                    <div className="col-md-6 d-flex mb-4" key={key}>
                        <div className="d-flex flex-column bg-white border w-100 shadow-sm rounded-2">
                            <div className="d-flex border-bottom p-2"> <span className="color-fifth fs bold ps-3"> { item.sname } </span>  </div>
                            <div className="d-flex border-bottom mb-2 py-2 px-4"> 
                                <div className="d-flex gap-2"> 
                                    <button className={buttonState[key] ? "btn btn-sm btn-fifth" : "btn btn-sm btn-basic"} onClick={() => handleButtonClick(key, true)} > appareils  </button>
                                    <button className={!buttonState[key] ? "btn btn-sm btn-fifth" : "btn btn-sm btn-basic"} onClick={() => handleButtonClick(key, false)} > culture </button>  
                                </div>
                            </div>
                            <div className="px-4">  { buttonState[key] ? ( <Devices devices={ item.device } sid={item.sid} /> ) : ( <ModificationForm soiltype={ item.soiltype } flowrate={ item.flow } /> )  }  </div>
                            <div className="d-flex align-items-center justify-content-between border-top py-2 px-3"> 
                                <div className="d-flex align-items-center gap-2"> 
                                    <input type="checkbox"  className="form-check-input color-fifth"  id={`checker-${key}`}   onChange={() => handleCheckboxChange(key)} />
                                    <label className="color-gray fs-s text-start " htmlFor={`checker-${key}`} > Activer le bouton de suppression </label>
                                </div>
                                <button disabled={!checkState[key]} className="btn btn-sm btn-fifth"> supp </button>  
                            </div>
                        </div>
                    </div>
                 )})
            }                   
                </div>
            </div>

            {/* **************************************************************************************************************** */}
            <div className="container-fluid bg-darks" >
                <Footer />
            </div>

        </div>
    )
}












