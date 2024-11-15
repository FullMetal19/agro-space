import React from "react";
import { Table } from 'react-bootstrap';


export function DeviceList({ data })
{
    return(
 
        <Table bordered hover className="">
            <thead className="table-light">
                <tr>
                    <th scope="col"> Appareils </th>
                    <th scope="col"> Cultures </th>
                    <th scope="col"> Activité </th>
                    <th scope="col"> Date début </th>
                    <th scope="col"> Date fin </th>
                </tr>
            </thead>
            <tbody>
                { data.map((row, index) => (
                    
                    <React.Fragment key={index}> 
                        <tr>
                            <td className="color-gray fs-s" > { row.id } </td> 
                            <td className="color-gray fs-s"> { row.sname } </td>
                            <td className="color-gray d-flex align-items-center justify-content-center" > { row.state ? ( <span className="green-indicator" /> ) : ( <span className="red-indicator" /> )  }</td>
                            <td className="color- fs-s"> { row.starttime } </td> 
                            <td className="color-gray fs-s"> { row.endtime } </td> 
                        </tr>       
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
 

   
    )
}