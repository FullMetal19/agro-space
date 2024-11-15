import React from "react";
import { useParams } from "react-router";


export function TopBar()
{

    return(

        <nav className="navbar navbar-expand-lg border-bottom bg-gray">
          <div className="container-fluid px-4">
    
            {/* <!-- site title and icon  --> */}
            <div className="navbar-brand me-4">
                {/* <img src={'../img/favicon.png'} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" /> */}
                <span className="color-basic h2" > Agro-<span className="color-fifth">space</span> </span>
            </div>
    
            {/* <!-- toggle button --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            {/* <!-- links --> */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav gap-4">          
                    <div> <a className="btn btn-fifth rounded-4" href="/connexion"> se-connecter </a> </div>
                    <div> <a className="btn btn-basic rounded-4" href="/nouveau-compte">  creer-compte </a> </div>
                </div>
            </div>
    
        </div>
    </nav>

    )
}


export function DashboardBarMenu()
{
    const { pid } = useParams()

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active px-3 d-flex align-items-center"> 
                        <img src={'/img/dashboard.png'} width={20} height={20} alt="Logo"  className="img-center" />
                        <a class="nav-link" href={ '/panel/'+ pid }> Dashboard </a> 
                    </li>
                    <li class="nav-item active px-3 d-flex align-items-center"> 
                        <img src={'/img/calendar.png'} width={20} height={20} alt="Logo"  className="img-center" />
                        <a class="nav-link" href={ '/panel/'+ pid + '/calendrier'}> Calendrier </a>
                    </li>
                    <li class="nav-item active px-3 d-flex align-items-center"> 
                        <img src={'/img/itk.png'} width={20} height={20} alt="Logo"  className="img-center" />
                        <a class="nav-link" href={ '/panel/'+ pid + '/itk'}> ITK </a>
                    </li>
                    <li class="nav-item active px-3 d-flex align-items-center"> 
                        <img src={'/img/network.png'} width={20} height={20} alt="Logo"  className="img-center" />
                        <a class="nav-link" href={ '/panel/'+ pid + '/reseau' }> Reseau </a>
                    </li>
                    <li class="nav-item active px-3 d-flex align-items-center"> 
                        <img src={'/img/notification.png'} width={20} height={20} alt="Logo"  className="img-center" />
                        <a class="nav-link" href={ '/panel/'+ pid + '/notification' }> Notification </a>
                    </li>
                    <li class="nav-item active px-3 d-flex align-items-center"> 
                        <img src={'/img/setting.png'} width={20} height={20} alt="Logo"  className="img-center" />
                        <a class="nav-link" href={ "/panel/" + pid + "/parametre" }> Parametre </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}