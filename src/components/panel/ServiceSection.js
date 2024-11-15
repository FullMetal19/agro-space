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
                <div className="col-md-6 col-lg-4"> <ServiceItem title="This is my title" text="is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used " /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="This is my title" text="is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used " /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="This is my title" text="is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used " /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="This is my title" text="is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used " /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="This is my title" text="is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used " /> </div>
                <div className="col-md-6 col-lg-4"> <ServiceItem title="This is my title" text="is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used " /> </div>
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
                        <div className="col-lg-12 mb-3 rounded-2 p-2 border" >  <span className='color-gray fs-s mb-3' > is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used is assigned a value but never used </span> </div>
                        <div className="col-lg-12 mb-2 px-4" >
                            <div className="rounded-2 bg-second p-2 border" > <span className="color-gray fs-s"> <span className="h6 color-fifth"> A. </span> never used is assigned a value but never used  </span> </div>
                        </div>
                        <div className="col-lg-12 mb-2 px-4" >
                            <div className="rounded-2 bg-second p-2 border" > <span className="color-gray fs-s"> <span className="h6 color-fifth"> B. </span> never used is assigned a value but never used  </span> </div>
                        </div>
                        <div className="col-lg-12 mb-2 px-4" >
                            <div className="rounded-2 bg-second p-2 border" > <span className="color-gray fs-s"> <span className="h6 color-fifth"> C. </span> never used is assigned a value but never used  </span> </div>
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
                            <div className="mb-2" ><span className="fs bold color-gray"> Statistique </span> </div>
                            <div className="" > <span className="color-gray fs-s"> Use the online er the online image the online image online er the online image the online image </span> </div>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="border d-flex flex-column bg-white rounded-2 p-4 mb-4"> 
                            <div className="mb-2" ><span className="fs bold color-gray"> Statistique </span> </div>
                            <div className="" > <span className="color-gray fs-s"> Use the online er the online image the online image online er the online image the online image </span> </div>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="border d-flex flex-column bg-white rounded-2 p-4 mb-4"> 
                            <div className="mb-2" ><span className="fs bold color-gray"> Statistique </span> </div>
                            <div className="" > <span className="color-gray fs-s"> Use the online er the online image the online image online er the online image the online image </span> </div>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="border d-flex flex-column bg-second rounded-2 p-4 mb-4"> 
                            <div className="mb-2" ><span className="fs bold color-gray"> Statistique </span> </div>
                            <div className="" > <span className="color-gray fs-s"> Use the online er the online image the online image online er the online image the online image </span> </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
}