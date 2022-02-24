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
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
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
    <div className="  space-y-10 py=10 md:py-20 container mx-auto px-10 md:px-40 ">
           <div className="space-y-2.5 text-center px-10 md:px-40 lg:px-60">
                <div className="space-y-1 " data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"}>
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Our Services</div>
                    <div className="flex justify-center space-x-1">
                        <div className="border-2 border-red-500 rounded-full w-1" />
                        <div className="border-2 border-red-500 rounded-l-lg w-20" />
                    </div>
                </div>
                <div data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"} className="font-semibold text-xl md:text-2xl lg:text-3xl">We are Interested for Your <a className="text-red-500">Service</a> of Ocean Freight</div>
                <div data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"} className="text-base md:text-md lg:text-lg">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</div>
            </div>
            <Slider  {...settings}>
               
                {item.map((element)=>(
                    <div className=" p-2" data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"}>
                        <div className="w-full  relative">{element.img}
                        <div className="absolute rounded-full bg-red-500 text-white text-2xl p-2 md:text-3xl -bottom-6 lg:text-4xl right-3">
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