import React from "react";
import {ImLocation} from "react-icons/im"
const OurSkills = () =>{
    const data =[ { title :"Road Freight" , prcent:"[85%]",prw:"w-2/12" , width:"w-10/12" },
    { title :"Ocean Freight" , prcent:"[60%]",prw:"w-2/5" , width:"w-3/5" },
    { title :"Air Freight" , prcent:"[75%]",prw:"w-1/4" , width:"w-3/4" },]
    return(
        <div className="relative h-full">
        <div className="px-10 md:px-40 container mx-auto py-10 md:py-20 space-y-10 md:space-y-0 md:flex md:space-x-10">
        <div className="md:flex w-full space-y-10 md:space-y-0">
            <div data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"} className="md:w-1/2 w-full h-full md:absolute left-0 top-0 ">
                <img className="h-full object-none w-full" src="/img/skill-1.jpg"/>
            </div>
            <div className="w-1/2"></div>
            <div className=" space-y-5  md:w-1/2 ">
                <div data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"} className="space-y-1 ">
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Our Skill</div>
                    <div className="flex  space-x-1">
                        <div className="border-2 border-red-500 rounded-full w-1" />
                        <div className="border-2 border-red-500 rounded-l-lg w-20" />
                    </div>
                </div>
                <div data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"} className="font-bold text-xl md:text-2xl lg:text-3xl">You ca achive and Progress information  <a className="text-red-500">Skill</a> Development.</div>
                <div className="space-y-5 w-full">
                {data.map((item)=>(
                        <div className="space-y-2" data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"}>
                            <div className="font-bold text-base md:text-md lg:text-lg">{item.title}</div>
                            <div className="flex">
                                <div className={`h-1 ${item.width} bg-red-500`}/>
                               
                                <div className={`relative border-2 ${item.prw}`}>
                                <div className="absolute -left-2 bottom-2">
                                <ImLocation />
                                </div>
                                    <div className="absolute right-0 bottom-2 text-red-500">{item.prcent}</div>
                                </div>
                            </div>
                        </div> 
                    ))} 
                </div> 
            </div>
           
        </div>
    </div>
    </div>
    )
}
export default OurSkills