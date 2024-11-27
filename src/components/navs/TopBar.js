import React from "react";
import { useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";


export function TopBar()
{

    return(

        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="/">  <span className="color-basic h2"> Agro- <span className="color-fifth"> space </span> </span>  </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto gap-3 mt-toggle">
                        <Nav.Link className="rounded-4 btn btn-sm btn-fifth px-3" href="/connexion">  se-connecter  </Nav.Link>
                        <Nav.Link className="rounded-4 btn btn-sm btn-basic px-3" href="/nouveau-compte">  creer-compte  </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}


export function DashboardBarMenu()
{
    const { pid } = useParams()

    return (


        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="sticky-top" >
            <Container className="d-flex justify-content-between">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto gap-3 mt-toggle">
                        <Nav.Link className="px-3 d-flex align-items-center gap-1" href={ '/panel/'+ pid } > 
                            <img src={'/img/dashboard.png'} width={20} height={20} alt="Logo"  className="img-center" />
                            <span> Dashboard </span>
                        </Nav.Link>
                        <Nav.Link className="px-3 d-flex align-items-center gap-1" href={ '/panel/'+ pid + '/calendrier'}>  
                            <img src={'/img/calendar.png'} width={20} height={20} alt="Logo"  className="img-center" />
                            <span> Calendrier </span>
                        </Nav.Link>
                        <Nav.Link className="px-3 d-flex align-items-center gap-1" href={ '/panel/'+ pid + '/itk'} >  
                            <img src={'/img/itk.png'} width={20} height={20} alt="Logo" className="img-center" />
                            <span> Itk </span>
                        </Nav.Link>
                        <Nav.Link className="px-3 d-flex align-items-center gap-1" href={ '/panel/'+ pid + '/reseau' } >  
                            <img src={'/img/network.png'} width={20} height={20} alt="Logo"  className="img-center" />
                            <span> Réseau </span>
                        </Nav.Link>
                        <Nav.Link className="px-3 d-flex align-items-center gap-1" href={ '/panel/'+ pid + '/notification' } >  
                            <img src={'/img/notification.png'} width={20} height={20} alt="Logo"  className="img-center" />
                            <span> Notification </span>
                        </Nav.Link>
                        <Nav.Link className="px-3 d-flex align-items-center gap-1" href={ "/panel/" + pid + "/parametre" }>  
                            <img src={'/img/setting.png'} width={20} height={20} alt="Logo"  className="img-center" />
                            <span> Paramètre </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}