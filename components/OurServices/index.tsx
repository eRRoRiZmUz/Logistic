import React from "react";

import Slider from "react-slick";
import {AiFillCar} from "react-icons/ai"
import {IoAirplaneSharp} from "react-icons/io5"
import {MdLocalShipping} from "react-icons/md"
import {FaShip} from "react-icons/fa"
const OurServices =() =>{
    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }]
      };
      const item = [{
          img:<img className="w-full h-service object-center object-cover" src="/img/4.jpg"/> ,
          icon:<IoAirplaneSharp/>,
          title:"Air Freight",
          text:"It was popularised in the 1960s with the release of Letraset sheets containing"
      },
      {
        img:<img className="w-full h-service object-center object-cover" src="/img/5.jpg"/> ,
        icon:<FaShip/>,
        title:"Ocean Freight",
        text:"It was popularised in the 1960s with the release of Letraset sheets containing"
    }
    ,{
        img:<img className="w-full h-service object-center object-cover" src="/img/6.jpg"/> ,
        icon:<AiFillCar/>,
        title:"Warehouse Freight",
        text:"It was popularised in the 1960s with the release of Letraset sheets containing"
    }   
    ,{
        img:<img className="w-full h-service object-center object-cover" src="/img/3.jpg"/> ,
        icon:<MdLocalShipping/>,
        title:"Road Freight",
        text:"It was popularised in the 1960s with the release of Letraset sheets containing"
    }
   ] 
    return(
    <div className="bg-[#F2F2F2]">
    <div className="  space-y-10 py-10 md:py-20 container mx-auto px-10 md:px-40 ">
           <div className="space-y-2.5 text-center ">
                <div className="space-y-1 " data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Our Services</div>
                    <div className="flex justify-center space-x-1">
                        <div className="border-2 border-[#277ecd] rounded-full w-1" />
                        <div className="border-2 border-[#277ecd] rounded-l-lg w-20" />
                    </div>
                </div>
                <div data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000} className="font-semibold text-xl md:text-2xl lg:text-3xl">We are Interested for Your <a className="text-[#277ecd]">Service</a> of Ocean Freight</div>
                <div data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000} className="text-base md:text-md lg:text-lg">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</div>
            </div>
            <Slider  {...settings}>
                {item.map((element)=>(
                    <div className=" p-2" data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>
                        <div className="w-full  relative">{element.img}
                        <div className="absolute rounded-full bg-[#277ecd] text-white text-2xl p-2 md:text-3xl -bottom-6 lg:text-4xl right-3">
                                {element.icon}
                            </div>
                        </div>
                        <div className="p-5 border space-y-3">
                            <div className="font-bold text-lg md:text-xl lg:text-2xl">{element.title}</div>
                            <div>{element.text}</div>
                       
                        </div>
                    </div>
                ))}
            </Slider>
    </div>
    </div>)
}
export default OurServices