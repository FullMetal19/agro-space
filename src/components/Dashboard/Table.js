import React from "react";
import { Table } from 'react-bootstrap';


export function CalendarTable({ data  })
{

    const dataArray = Object.keys(data).map((date) => ({
        date,
        ...data[date],
      }));

    const sortedDataArray = dataArray.sort((a, b) => {
        const dateA = new Date(a.date.split('-').reverse().join('-'));
        const dateB = new Date(b.date.split('-').reverse().join('-'));
        return dateA - dateB;
    });
      
    return(
 
        <Table bordered hover className="">
            <thead className="table-light">
                <tr>
                    <th scope="col"> Date </th>
                    <th scope="col"> # </th>
                    <th scope="col"> Heure </th>
                    <th scope="col"> Eau (L) </th>
                    <th scope="col"> Etat </th>
                </tr>
            </thead>
            <tbody>

                { sortedDataArray.map((row, index) => (
                    
                    <React.Fragment key={index}> 
                        <tr>
                            <td className="color-gray" rowSpan="2"> { row.date } </td> 
                            <td className="color-gray"> matin </td>
                            <td className="color-gray"> { row.morning.startAt } </td>
                            <td className="color-gray"> { row.morning.water } </td> 
                            <td className="color-gray d-flex align-items-center" > { row.morning.state ? ( <span className="green-indicator" /> ) : ( <span className="red-indicator" /> )  }</td>
                        </tr>       
                        <tr>  
                            <td className="color-gray"> soir </td>                                                       
                            <td className="color-gray"> { row.afternoon.startAt } </td> 
                            <td className="color-gray">  { row.afternoon.water }  </td> 
                            <td className="color-gray d-flex align-items-center" > { row.afternoon.state ? ( <span className="green-indicator" /> ) : ( <span className="red-indicator" /> )  }</td>                    
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
 

   
    )
}