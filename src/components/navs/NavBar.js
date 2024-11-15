import React from "react";
import { SignOut } from "../../config/Auth";
import { useNavigate } from 'react-router-dom';

export function NavBarPanel()
{
    const navigate = useNavigate();

    const decon = async()=>{
        await SignOut()
        navigate('/')
    }

    return (

    <nav className="navbar bg-white border">
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center w-100" >
                <div className="d-flex"> <span className="color-basic h2" > Agro-<span className="color-fifth">space</span> </span> </div>
                <div> <button className="btn btn-basic fifth rounded-2" onClick={ ()=>{ decon() } } > deconnexion </button> </div>  
            </div>
        </div>
    </nav>

   )
}


export function MenuCollection()
{
    return(  

        <div className="container sticky-top">
            <div className="row">
               {/* ************************************************************************** */}
               <MenuItem img={'/img/panel.png'} title={'Panel'} navigation={'/panel'} /> 
               <MenuItem img={'/img/service-50.png'} title={'Services'} navigation={'/services'} /> 
               <MenuItem img={'/img/chatbot.png'} title={'Chatbot'} navigation={'/chatbot'} />  
               <MenuItem img={'/img/profil.png'} title={'Profile'} navigation={'/profile'} />    
            </div>   
        </div>  

    )
}


function MenuItem({ img, title, navigation })
{
    return(
 
        <div className="col-3 p-0 mb-5" > 
            <a className="link" href={ navigation } title={ title } > 
                <div className="col-12 d-flex flex-column justify-content-center align-items-center border bg-white p-2"> 
                    <img src={ img } width={24} height={24} alt="Logo"  className="img-center" />
                    <span className="color-gray hide-md"> { title } </span>
                </div>   
            </a> 
        </div> 
    )
}