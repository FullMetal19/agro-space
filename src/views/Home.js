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
                        <span className="text-hover"> Download the app the online image color picker the online image color picker the online image color picker </span>
                    </div>
                </div>
            </div>   

            {/* **************************************************************************************************************** */}   
            <div className="container-fluid bg-second p-4 border-top"  data-aos="fade-up" >
                <LottieContainer lottieAnim={ agriAnimation } title={'Use the online image'} text={' Use the online image color picker above to select a color and get the HTML Color Code of this pixel. Also you get the HEX color code value, RGB value and HSV value'} />
            </div> 

            {/* **************************************************************************************************************** */}   
            <div className="container-fluid bg-darks py-5 px-4 border"> 
              <div className="container"> 
                <div className="row my-5"> 
                    <div className="col-md-12 d-flex justify-content-center mb-5"> <span className="h1 color-second text-center"> Use the online image </span> </div>
                    <div className="col-md-12"> 
                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">  <Box title={'Use the online image'}/>  </div>
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">  <Box title={'Use the online image'}/>  </div>
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">  <Box title={'Use the online image'}/>  </div>
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">  <Box title={'Use the online image'}/>  </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            {/* **************************************************************************************************************** */}   
            <div className="container-fluid bg-second py-5 px-4 border-top" >
              <div className="container"> 
                <div className="row my-5"> 
                    <div className="col-12 d-flex justify-content-center mb-5"> <span className="h1 color-second color-basic text-center"> Use the online image </span> </div>
                    <div className="col-12"> 
                       <div className="row">
                            <div className="col-md-4 d-flex justify-content-center mb-4" data-aos="fade-up"> <Card img={'../img/img1.jpg'} title={'Use the online image'} text={'se the online image color picker above to select a color and get the HTML Color Code of this pixel. Also you get the HEX color code value, RGB value and HSV value'} /> </div>
                            <div className="col-md-4 d-flex justify-content-center mb-4" data-aos="fade-up"> <Card img={'../img/img2.jpg'} title={'Use the online image'} text={'se the online image color picker above to select a color and get the HTML Color Code of this pixel. Also you get the HEX color code value, RGB value and HSV value'} /> </div>
                            <div className="col-md-4 d-flex justify-content-center mb-4" data-aos="fade-up"> <Card img={'../img/img3.png'} title={'Use the online image'} text={'se the online image color picker above to select a color and get the HTML Color Code of this pixel. Also you get the HEX color code value, RGB value and HSV value'} /> </div>
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
                <ReverseLottieContainer lottieAnim={ tech } title={'Use the online image'} text={' Use the online image color picker above to select a color and get the HTML Color Code of this pixel. Also you get the HEX color code value, RGB value and HSV value'} />
            </div> 

            {/* **************************************************************************************************************** */}
            <div className="container-fluid bg-gradients py-5" >
                <div className="row d-flex justify-content-center" >
                <div className="col-md-8 col-lg-6" data-aos="fade-up"> 
                    <div className="d-flex flex-column align-items-center border w-100 p-3"> 
                        <span className="ms-2 text-center color-white mb-3 px-4 h6"> Use the online image color picker above to select a color and get the HTML Color Code of this pixel. Also you get the HEX color code value, RGB value and HSV value you get the HEX color code value, RGB value you get the HEX color code value, RGB value </span>                         
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