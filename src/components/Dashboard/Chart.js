import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GaugeChart from 'react-gauge-chart'

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid
  } from 'recharts';


export function Gauge({ value, maxValue, title })
{   
    const percentage = value / maxValue 

    return(

        <div className ="d-flex flex-column align-items-center card shadow-sm p-4 mb-4"> 
            <div className="mb-2" > 
                <GaugeChart id="gauge-chart3" percent={ percentage } textColor={"#333"} nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} />
            </div>
            <div className="d-flex align-items-center gap-2" > 
                <span className="color-gray fs-lg"> { value } </span>  
                <span className="color-gray fs"> { title } </span>
            </div>
        </div>
    )
}


export function BarsChart({ data })
{
    const generatepNodes = (arg) => {

        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        const curDate = `${year}-${month}-${day}`;
        let differenceInDays = 0

        return Object.keys(arg).map((key, index) => {
            const sdata = arg[key];
            const startAt = sdata.startAt
            const date1 = new Date(startAt);
            const date2 = new Date(curDate);
            if( date1  < date2 ) {
                const differenceInMs = Math.abs(date2 - date1);
                differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
            }  
            else differenceInDays = 0
            const dayleft =  sdata.duration - differenceInDays
            return  { name: sdata.sname, jours_passés : differenceInDays, jours_restant: dayleft  }
        });  
    };

    const sdata = generatepNodes(data)

    return(
        <div className="row card shadow-sm">
            <div className="col-md-12 d-flex border-bottom mb-2 p-2"> <span className="color-gray fs ps-4"> Informations sur les cultures </span>  </div>
            <div className="col-md-12 p-4">
                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={sdata} >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="jours_passés" stackId="a" fill="#0f9015" />
                        <Bar dataKey="jours_restant" stackId="a" fill="#A9A9A9" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
       
   )  
}