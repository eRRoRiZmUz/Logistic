import React from "react";
import {FcInTransit,FcGraduationCap} from "react-icons/fc"
const WhatWeDo = () =>{
    const data =[ { title :"Best Time Management" , icon: <FcInTransit /> , text:"It was popularised in the 1960s with the release of Letraset sheets containing ." },
    { title :"Secure & Trust" , icon: <FcGraduationCap/> , text:"It was popularised in the 1960s with the release of Letraset sheets containing ." },]
    return(
        <div className="bg-[#F2F2F2] relative h-full">
        <div className="px-10 md:px-40 container mx-auto py-10 md:py-20 space-y-10 md:space-y-0 md:flex md:space-x-10">
        <div className="md:flex md:space-x-10 space-y-10 md:space-y-0">
            <div className="space-y-5 w-full md:w-2/3 " data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"}>
                <div className="space-y-1 ">
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">What We Do</div>
                    <div className="flex  space-x-1">
                        <div className="border-2 border-red-500 rounded-full w-1" />
                        <div className="border-2 border-red-500 rounded-l-lg w-20" />
                    </div>
                </div>
                <div data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"} className="font-bold text-xl md:text-2xl lg:text-3xl">Your Goal to work Logistic  <a className="text-red-500">Activities</a> Solution of Business</div>
                <div className="space-y-5 ">
                {data.map((item)=>(
                        <div className="flex" data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"}>
                            <div className="border-2 border-red-500 rounded-full"/>
                            <div className="rounded-xl rounded-l-none drop-shadow-xl bg-white p-5 flex space-x-5" >
                                <div className="text-3xl md:text-4xl lg:text-5xl ">{item.icon}</div>
                                <div className="space-y-3">
                                    <div className="font-semibold text-lg md:text-xl lg:text-2xl">{item.title}</div>
                                    <div className="text-md md:text-lg">{item.text}</div>
                                </div>
                            </div>
                        </div> 
                    ))} 
                </div> 
            </div>
            <div className="md:w-1/2 w-full h-full md:absolute right-0 top-0 " data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"}>
                <video className="w-full h-full" controls={true}>
                     <source className="" src="www.youtube.com/watch?v=3bGNuRtlqAQ" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
    </div>
    )
}
export default WhatWeDo