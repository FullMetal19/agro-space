import React, { useEffect, useState } from "react";
import { Header } from '../components/Header';
import { Footer } from "../components/Footer";
import { Box, Card } from '../components/root/Box'
import { LottieContainer, ReverseLottieContainer } from '../components/root/Container';
import { VideoModal } from "../components/root/Modal";
import agriAnimation from '../assets/agri-tech.json';
import tech from '../assets/tech.json';
import Aos from "aos";
import "aos/dist/aos.css"


export function Home()
{
    const [ modalState , setModalState ] = useState(false);
    const closeModal = ( arg ) => {  setModalState( arg ) }

    useEffect( ()=>{
        Aos.init({ duration: 2000 })
    } , [])

    return(

        <div>

            { modalState ? ( <VideoModal method={ closeModal } /> ) : null}

            {/* **************************************************************************************************************** */}
            <Header /> 
            
            {/* **************************************************************************************************************** */}
            <div className="container py-5" >
                <div className="row">
                    <div className="col-lg-7 mb-4" data-aos="fade-right" > 
                        <div className="row" > 
                            <div className="col-md-6 mb-2 d-flex justify-content-center" > <a className="btn btn-basic rounded-2 py-3 px-5 shadow-sm" href="/"> Version apple </a> </div> 
                            <div className="col-md-6 d-flex justify-content-center" > <a className="btn btn-fifth rounded-2 py-3 px-5 shadow-sm" href="/"> Version android </a> </div> 
                        </div>
                    </div>
                    <div className="col-lg-5 "> 
                        <span className="text-hover"> Télécharger la version mobile de l'application :vous avez à disposition la version android et ios. </span>
                    </div>
                </div>
            </div>   

            {/* **************************************************************************************************************** */}   
            <div className="container-fluid bg-second p-4 border-top"  data-aos="fade-up" >
                <LottieContainer lottieAnim={ agriAnimation } title={"Systeme générative de calendrier cultural et d'automatisation"} text={"Plus besoin d'avoir une connaissance approfondi dans le domaine agricole pour lancer son propre business dans l'agriculture."} />
            </div> 

            {/* **************************************************************************************************************** */}   
            <div className="container-fluid bg-darks py-5 px-4 border"> 
              <div className="container"> 
                <div className="row my-5"> 
                    <div className="col-md-12 d-flex justify-content-center mb-5"> <span className="h1 color-second text-center"> Pourquoi choisir notre systeme </span> </div>
                    <div className="col-md-12"> 
                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">  <Box title={'Fiable'}/>  </div>
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">  <Box title={'Générative'}/>  </div>
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">  <Box title={'Multiplateforme'}/>  </div>
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">  <Box title={'Facile d\'utilisation'}/>  </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            {/* **************************************************************************************************************** */}   
            <div className="container-fluid bg-second py-5 px-4 border-top" >
              <div className="container"> 
                <div className="row my-5"> 
                    <div className="col-12 d-flex justify-content-center mb-5"> <span className=" color-darks display-6 text-center"> Principale service </span> </div>
                    <div className="col-12"> 
                       <div className="row">
                            <div className="col-md-4 d-flex justify-content-center mb-4" data-aos="fade-up"> <Card img={'../img/img1.png'} title={'Automatisation et IA générative'} text={"L'applification simplifie les tâches répétitives et optimise les processus. Grâce à des scénarios personnalisables et des intégrations intelligentes, cette fonctionnalité permet de déclencher des actions automatiques en fonction de conditions définies"} /> </div>
                            <div className="col-md-4 d-flex justify-content-center mb-4" data-aos="fade-up"> <Card img={'../img/img2.png'} title={'Monitoring et gestion de controle'} text={"Grâce à des tableaux de bord interactifs et des notifications en direct, l'application fournit des indicateurs clés de performance, et des rapports détaillés pour garantir un contrôle optimal."} /> </div>
                            <div className="col-md-4 d-flex justify-content-center mb-4" data-aos="fade-up"> <Card img={'../img/img3.png'} title={'Stockage de données'} text={"Avec la fonctionnalité de stockage, l'application offre un espace sécurisé et centralisé pour sauvegarder toutes les données importantes. Les utilisateurs peuvent accéder facilement à leurs données, ce service garantit la disponibilité, l'intégrité et la confidentialité des informations."} /> </div>
                        </div>
                    </div>
                </div>
              </div>
            </div> 

            {/* **************************************************************************************************************** */}   
            <div className="container-fluid slide-fixed pt-5"> 
                <div className="row d-flex justify-content-center align-items-center pt-5"> 
                    <div className="d-flex justify-content-center align-items-center mt-5" > 
                        <button className='btn circle bg-white shadow mt-5' onClick={ ()=>{ setModalState(true) } } > <img src={'../img/icons8-jouer-64.png'} alt="Logo" width={50} height={50} className="" /> </button>
                    </div>
                </div>
            </div>

            {/* **************************************************************************************************************** */}   
            <div className="container-fluid bg-second p-4 border-top" data-aos="fade-up">
                <ReverseLottieContainer lottieAnim={ tech } title={'Particularité du systeme'} text={"Nous vous offrons un syteme multiplateforme qui vous facilite la gestion et le controle de la chaine de production agricole. "} />
            </div> 

            {/* **************************************************************************************************************** */}
            <div className="container-fluid bg-gradients py-5" >
                <div className="row d-flex justify-content-center" >
                <div className="col-md-8 col-lg-6" data-aos="fade-up"> 
                    <div className="d-flex flex-column align-items-center border w-100 p-3"> 
                        <span className="ms-2 text-center color-white mb-3 px-4 h6"> Agro-space génère des informations personnalisées relative à l'itinéraire technique et au calendrier d'arrosage qui sera exécuté par le dispostif que nous avons conçu pour communiqué avec le sytème et assuré l'automatisation. Ce système a été dévelopé par le startup Xelkoom-AI dans l'espoir de booster ce secteur et fiabilisé les données qui en ressortent  </span>                         
                    </div>
                    <div className="mt-4 d-flex justify-content-center"> <a className="btn btn-basic rounded-2 py-3 px-5 shadow" href="/"> Apropos de Xelkoom-AI </a> </div>
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