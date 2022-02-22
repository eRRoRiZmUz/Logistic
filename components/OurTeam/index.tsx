import React from "react";

const OurTeam = () =>{
    const team =[ { name :"Abdul Habid" , img: "/img/man1.jpg" , job:"Road Freight" },
    { name :"Abdul Malik" , img: "/img/man2.jpg" , job:"Road Freight" },
    { name :"Abdul Basit" , img: "/img/man3.jpg" , job:"Road Freight" },
    { name :"Abdul Akhir" , img: "/img/man4.jpg" , job:"Road Freight" },
    
   ]
    return(
        <div className="py-10 md:py-20 space-y-5 md:space-y-10">
            <div className="space-y-2.5 text-center px-10 md:px-40 lg:px-60">
                <div className="space-y-1 ">
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Our Popular Team</div>
                    <div className="flex justify-center space-x-1">
                        <div className="border-2 border-red-500 rounded-full w-1" />
                        <div className="border-2 border-red-500 rounded-l-lg w-20" />
                    </div>
                </div>
                <div className="font-semibold text-xl md:text-2xl lg:text-3xl">Support are Interested for  <a className="text-red-500">Logistic</a> Team of Ocean Freight</div>
                <div className="text-base md:text-md lg:text-lg">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</div>
            </div>
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-5">
                {team.map((item)=>(
                    <div className="text-center group">
                        <div className="relative">
                        <img className="w-full " src={item.img}/>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:block hidden" />
                        </div>
                        <div className="border w-full border-[#d36832]"/>
                        <div className="bg-[#282828] group-hover:bg-red-500 py-5 space-y-3">
                            <div className="font-bold text-white text-md md:text-lg lg:text-xl">{item.name}</div>
                            <div className="font-semibold text-white text-sm md:text-base lg:text-md">{item.job}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default OurTeam