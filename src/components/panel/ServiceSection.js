import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import leaf from '../../assets/leaf.json';


export function ServiceSection()
{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (

        <div className="container p-4"> 

            {/* **************************************************************************************************************** */}   
            <div className="row mb-5"> 
                <div className="slider-container shadow-sm bg-white px-4 pb-5 pt-3"> 
                    <Slider {...settings}>

                        <div className=""> <SlideContain img={ '/img/bg-img2.jpg' }/> </div>
                        
                        <div className=""> <SlideContain2 img={ '/img/bg-img2.jpg' }/> </div>

                        <div className=""> <SlideContain img={ '/img/bg-img.jpg' } /> </div>
    
                    </Slider>
                </div>
            </div>
            {/* **************************************************************************************************************** */}   
            <div className="row py-5"> 
                <div className="col-md-6 col-lg-4"> <ServiceItem title="IA générative" text="Un modèle génératif qui fournit des recommandations basées sur des analyses approfondies des données locales et globales. Les utilisateurs pourront interagir avec le système.  " /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="Fiabilité" text="Les algorithmes d’analyse sont basés sur des modèles d’apprentissage automatique avancés, ce qui permet de fournir des informations précises et pertinentes en temps réel." /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="Sécurité" text="Les algorithmes d’analyse sont basés sur des modèles d’apprentissage automatique avancés, ce qui permet de fournir des informations précises et pertinentes en temps réel." /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="Multiplateforme" text="Le sytème est conçue pour fonctionner de manière fluide sur différentes plateformes afin de répondre aux besoins des utilisateurs, quel que soit leur environnement technologique" /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="Automatisation" text="Elle exécute et ajuste les paramètres en fonction des conditions météorologiques et des besoins spécifiques des cultures, réduisant ainsi le gaspillage d’eau et améliorant l’efficacité." /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="Monitoring" text="La fonctionnalité de monitoring est essentielle pour fournir une visibilité complète et en temps réel des conditions agricoles, accessibles sur plusieurs plateformes." /> </div>
            </div>

            
        </div>

    )
}


function ServiceItem({ title, text })
{
    return (
        <div className="d-flex flex-column bg-white border justify-content-center align-items-center p-4"> 
            <div className="d-flex justify-content-center align-items-center rounded-circle bg-gradients dim-80"> 
                <img src={ '../img/service.png' } alt="Logo" width={40} height={40} className="d-inline-block align-text-top img-fluid" />
            </div>
            <span className="bold fs text-center color-gray mt-2"> { title } </span>
            <span className="text-center fs-s px-4 color-gray mt-2"> { text } </span>
        </div>
        )
}


function SlideContain({ img })
{
    return (
        <div className="row py-4"> 

            <div className="col-md-6"> 
                <div className="d-flex"> <img src={ img } alt="Logo"className="img-fluid" /> </div>
            </div>
            <div className="col-md-6"> 
                <div className="d-flex flex-column px-4">
                    <div className="row" >
                        <div className="col-1 sml-size d-flex justify-content-center align-items-center p-0" > <Lottie animationData={ leaf } /> </div>
                        <div className="col-11 d-flex align-items-center p-0" > <span className="h4 color-fifth"> Agro-space </span> </div>
                    </div> 
                    <div className="row px-2"  >
                        <div className="col-lg-12 mb-3 rounded-2 p-2 border" >  <span className='color-gray fs-s mb-3' > Le monitoring inclut un système de notification sur les activités agricoles des dispositifs déployés dans la zone d'exploitation </span> </div>
                        <div className="col-lg-12 mb-2 px-4" >
                            <div className="rounded-2 bg-second p-2 border" > <span className="color-gray fs-s"> <span className="h6 color-fifth"> A. </span> Ces données sont affichées en temps réel :   </span> </div>
                        </div>
                        <div className="col-lg-12 mb-2 px-4" >
                            <div className="rounded-2 bg-second p-2 border" > <span className="color-gray fs-s"> <span className="h6 color-fifth"> B. </span> sur l'application web </span> </div>
                        </div>
                        <div className="col-lg-12 mb-2 px-4" >
                            <div className="rounded-2 bg-second p-2 border" > <span className="color-gray fs-s"> <span className="h6 color-fifth"> C. </span> sur l'application mobile  </span> </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
}


function SlideContain2({ img })
{
    return (
        <div className="row py-4"> 

            <div className="col-md-6"> 
                <div className="d-flex"> 
                    <img src={ img } alt="Logo"className="img-fluid" /> 
                    {/* ********************************************************************************************* */}
                </div>
            </div>
            
            <div className="col-md-6"> 
                <div className="row">
                    <div className="col-md-6"> 
                        <div className="border d-flex flex-column bg-second rounded-2 p-4 mb-4"> 
                            <div className="mb-2" ><span className="fs bold color-gray"> Sociale </span> </div>
                            <div className="" > <span className="color-gray fs-s"> Un espace où les utilisateurs pourront échanger sur les bonnes pratiques et poser des questions. </span> </div>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="border d-flex flex-column bg-white rounded-2 p-4 mb-4"> 
                            <div className="mb-2" ><span className="fs bold color-gray"> Mobile </span> </div>
                            <div className="" > <span className="color-gray fs-s"> Une conception adaptée aux écrans des smartphones pour une navigation rapide dans l'application. </span> </div>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="border d-flex flex-column bg-white rounded-2 p-4 mb-4"> 
                            <div className="mb-2" ><span className="fs bold color-gray"> Locale </span> </div>
                            <div className="" > <span className="color-gray fs-s"> L’accent est mis sur l'adaptation locale pour répondre aux spécificités des conditions agricoles dans différentes régions. </span> </div>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="border d-flex flex-column bg-second rounded-2 p-4 mb-4"> 
                            <div className="mb-2" ><span className="fs bold color-gray"> web </span> </div>
                            <div className="" > <span className="color-gray fs-s"> Visualisation et analyse approfondie des données collectées sur plusieurs saisons agricoles. </span> </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
}