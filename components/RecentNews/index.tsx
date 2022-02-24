import React from "react";

const RecentNews = () =>{
    const news =[ { title :"Why Transport Company Best of the day?" , img: "/img/2.jpg" , text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida. Nullam in viverra sapien. Nunc bibendum nec lectus et vulputate. Nam." },
    { title :"3 things do not get Other company Why?" , img: "/img/1.jpg" , text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida. Nullam in viverra sapien. Nunc bibendum nec lectus et vulputate. Nam." },
    { title :"The best Way Logistic get Other company?" , img: "/img/3.jpg" , text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida. Nullam in viverra sapien. Nunc bibendum nec lectus et vulputate. Nam." }]
    return(
       <div className="bg-[#F2F2F2]">
            <div className="py-10 md:py-20 space-y-5 md:space-y-10 container mx-auto px-10 md:px-40">
            <div className="space-y-2.5 text-center px-10 md:px-40 lg:px-60">
                <div className="space-y-1 " data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"}>
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Recent News</div>
                    <div className="flex justify-center space-x-1">
                        <div className="border-2 border-red-500 rounded-full w-1" />
                        <div className="border-2 border-red-500 rounded-l-lg w-20" />
                    </div>
                </div>
                <div data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"} className="font-semibold text-xl md:text-2xl lg:text-3xl">Support are Interested for <a className="text-red-500">Logistic</a> Team of Ocean Freight</div>
                <div data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"} className="text-base md:text-md lg:text-lg">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</div>
            </div>
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-5">
                {news.map((item)=>(
                    <div className="space-y-5 text-center" data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"}>
                        <img className="w-full" src={item.img}/>
                        <div className="font-bold text-lg md:text-xl lg:text-2xl">{item.title}</div>
                        <div className="border w-full"/>
                        <div className="text-base md:text-md lg:text-lg">{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
       </div>
    )
}
export default RecentNews