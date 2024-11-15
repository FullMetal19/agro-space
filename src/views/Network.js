import React, {useEffect, useState} from "react";
import { NavBarPanel } from "../components/navs/NavBar";
import { DashboardBarMenu } from "../components/navs/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "../components/Footer";
import { DeviceList } from "../components/Dashboard/List";
import { useParams } from "react-router";
import { Architecture } from "../components/Dashboard/Architecture";
import { rdb } from "../config/DBconfig";
import { ref, get, child } from 'firebase/database';
import { getSpeculations } from "../config/SpeculationModal";
import { getProjectById } from "../config/ProjectModal";

export function Network()
{
    const { pid } = useParams()
    const [device, setDevice] = useState([]);
    const [specs , setSpecs] = useState([]);
    const [project , setProject] = useState();

    const findSpecs = async () => {      
      const data = await getSpeculations({ pid })
      setSpecs( data )
    }

    const findProject = async () => {      
      const data = await getProjectById ( pid )
      setProject( data )
    }    

    const fetchDevices = async () => {
      try {
        const dbRef = ref(rdb);
        const snapshot = await get(child(dbRef, 'Devices'));
        if (snapshot.exists()) {
          const data = snapshot.val();
          // Convert data from object to array for easier rendering
          const deviceArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          // Filter the deviceArray to include only items with a specific pid value
          const filteredDevices = deviceArray.filter((device) => device.pid === pid);
          // Use filteredDevices as needed
          // console.log( filteredDevices );

          // console.log(deviceArray)
          setDevice(filteredDevices);
          // setLoading(true);

        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
    };
  }



    

    useEffect(() => {
        findSpecs();
        findProject();
        fetchDevices();
      }, []);

    return (

        <div className="bg-second" > 

            <NavBarPanel />

            <DashboardBarMenu />

            <div className ="container"> 
                <div className="d-flex flex-column px-4 py-5">
                    {/* ********************************************************************************************* */}    
                    <div className="row card shadow-sm mb-5">
                        <div className="col-12 d-flex border-bottom mb-2 p-2"> <span className="color-gray fs ps-4"> Architecture du réseau </span>  </div>
                        <div className="col-12 p-4"> <Architecture sdata={ specs } pdata={ project } /> </div>
                    </div>

                    <div className="row card shadow-sm">
                        <div className="col-12 d-flex border-bottom mb-2 p-2"> <span className="color-gray fs ps-4"> Informations sur les appareils </span>  </div>
                        <div className="col-12 p-4"> <DeviceList data={ device } />  </div>
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