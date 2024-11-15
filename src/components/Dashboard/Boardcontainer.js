import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';


export function BaordInfocontainer()
{
    return(
   
            <div className="row card p-4 shadow-sm"  >
                {/* ********************************************************************************************* */} 
                <div className="col-12 mb-4" > 
                    <span className="ms-2 color-fifth fs-s border-left ps-2"> A propos des cultures </span> 
                    <div className="d-flex rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray fs-s"> Le nombre maximal de culture à créer est fixé à 30. </span> </div>
                </div>
                {/* ********************************************************************************************* */} 
                <div className="col-12 mb-4" > 
                    <span className="ms-2 color-fifth fs-s border-left ps-2"> A propos des appareils </span> 
                    <div className="d-flex rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray fs-s"> Le nombre maximal d'appareils à créer est fixé à 30.  </span> </div>
                </div>
                {/* ********************************************************************************************* */} 
                <div className="col-12 mb-2" > 
                    <span className="ms-2 color-fifth fs-s border-left ps-2"> A propos des activités </span> 
                    <div className="d-flex rounded-2 bg-second p-3 mt-1 border" > <span className="color-gray fs-s"> L'activité représente le nombre d'appareils qui sont actuellement en activité </span> </div>
                </div>
            </div>
    )
}


export function SimpleBoardcontainer(props) 
{
    return(
 
        <div className="row card shadow-sm">
            <div className="col-12 d-flex border-bottom mb-2 p-2"> <span className="color-gray fs ps-4"> Informations sur les cultures </span>  </div>
            <div className="col-12 p-4"> { props.children } </div>
        </div>
    )
}


export function MainBoardcontainer({ children }) 
{
    return(
 
        <div className="row card shadow-sm">
            <div className="col-12 d-flex border-bottom mb-2 p-2"> 
                <Dropdown drop="end">
                    <Dropdown.Toggle variant="default" id="dropdown-basic"> </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>  
            </div>

            {/* ********************************************************************************************* */}
            <div className="col-12 p-4 "> { children } </div>
        </div>
    )
}