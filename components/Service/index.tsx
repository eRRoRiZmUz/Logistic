import React from "react";
import {RiRoadsterFill} from "react-icons/ri"
import {IoAirplaneOutline} from "react-icons/io5"
import {GiCargoShip} from "react-icons/gi"
import {MdDirectionsBus} from "react-icons/md"

const Service = () =>{
    const service = [{icon:<RiRoadsterFill />, title:"Road Freight", text:"Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor." },
    {icon:<IoAirplaneOutline/>, title:"Road Freight", text:"Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor." },
    {icon:<GiCargoShip/>, title:"Sea Freight in City", text:"Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor." },
    {icon:<MdDirectionsBus />, title:"Warehouse Service", text:"Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor." }]
return(<div className="bg-[#F2F2F2]">
    <div className="py-10 md:py-20 container mx-auto px-10 md:px-40">
    <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5">
        {service.map((item)=>(
            <div  data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"} className="bg-white p-8 space-y-5 text-left">
                <div className="text-red-500 text-2xl md:text-4xl">{item.icon}</div>
                <div className=" font-semibold text-xl md:text-2xl">{item.title}</div>
                <div className=" text-lg md:text-xl">{item.text}</div>
            </div>
        ))}
    </div>
</div>
</div>)
}
export default Service