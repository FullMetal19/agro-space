import React, { useEffect, useState } from "react";
import { DashboardBarMenu } from "../components/navs/TopBar";
import { NavBarPanel } from "../components/navs/NavBar";
import { Footer } from "../components/Footer";
import { BarsChart, Gauge } from "../components/Dashboard/Chart";
import { BaordInfocontainer } from "../components/Dashboard/Boardcontainer";
import { BoardForm } from "../components/Dashboard/Forms";
import { useParams } from "react-router";
import { getSpeculations } from "../config/SpeculationModal";

import { rdb } from "../config/DBconfig";
import { ref, get, child } from 'firebase/database';

export function Dashboard ()
{
    const [specs , setSpecs] = useState([]);
    const [nbspecs , setNbspecs] = useState();
    const [nbdevice , setNbdevice] = useState();
    const [nbofdeviceinActiviy , setNbofdeviceinActiviy] = useState();
    const { pid } = useParams()

    const findSpecs = async () => {      
        const data = await getSpeculations({ pid })
        setNbspecs( data.length )
        setSpecs( data )
        let value = 0
        data.map((item) => { 
            let val = item.device 
            value += val.length 
        })
        setNbdevice(value)
    }

    const fetchDevices = async () => {
        try {
          const dbRef = ref(rdb);
          const snapshot = await get(child(dbRef, 'Devices'));
          if (snapshot.exists()) {
            const data = snapshot.val();
            const deviceArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            const filteredDevices1 = deviceArray.filter((device) => device.pid === pid);
            const filteredDevices2 = filteredDevices1.filter((device) => device.state === 1);
            setNbofdeviceinActiviy( filteredDevices2.length );
          } else {
            console.log("No data available");
          }
        } catch (error) {
          console.error("Error fetching data: ", error);
      };
    }



    useEffect(() => {
        findSpecs();
        fetchDevices();
      }, []);

    return (

        <div className="bg-second" > 
            <NavBarPanel />
            <DashboardBarMenu />

            {/* **************************************************************************************************************** */}
            <div className ="container"> 
                <div className="row py-5" >
                    <div className="col-md-6 col-lg-4" > <Gauge value={ nbspecs } maxValue={30} title={ 'cultures' } /> </div>
                    <div className="col-md-6 col-lg-4" > <Gauge value={ nbdevice } maxValue={100} title={ 'appareils' } /> </div>
                    <div className="col-md-6 col-lg-4" > <Gauge value={ nbofdeviceinActiviy } maxValue={5} title={ 'dispositif en activité' } /> </div>
                </div>

                <div className="row pb-5" >
                    <div className="col-lg-4 d-flex flex-column gap-4 px-4 mb-5" > 
                        <BoardForm />
                        <BaordInfocontainer /> 
                    </div>
                    <div className="col-lg-8 px-4" >  <BarsChart data={ specs } />  </div>
                </div>
            </div>

            {/* **************************************************************************************************************** */}
             <div className="container-fluid bg-darks" >
                <Footer />
            </div>
        </div>
    )
}