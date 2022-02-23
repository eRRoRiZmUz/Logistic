import React from "react";
import Slider from "react-slick";

const OurProject = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        arrows:false,
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
    const data = [{
        img:<img className="w-full" src="/img/1.jpg" />,
        ProjectName:"Logistic Product ",
        jProductName:"Weight Product"
    },
    {
        img:<img className="w-full" src="/img/2.jpg" />,
        ProjectName:"Logistic Product ",
        jProductName:"Weight Product"
    },
  
    {
        img:<img className="w-full" src="/img/3.jpg" />,
        ProjectName:"Logistic Product ",
        jProductName:"Weight Product"
    },  {
        img:<img className="w-full" src="/img/4.jpg" />,
        ProjectName:"Logistic Product ",
        jProductName:"Weight Product"
    },]
    return(
    <div className=" py-10 md:py-20 space-y-10">
        <div className="space-y-2.5 text-center px-10 md:px-40 lg:px-60">
            <div className="space-y-1 ">
                <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Our Projects</div>
                <div className="flex justify-center space-x-1">
                    <div className="border-2 border-red-500 rounded-full w-1" />
                    <div className="border-2 border-red-500 rounded-l-lg w-20" />
                </div>
            </div>
            <div className="font-bold text-xl md:text-2xl lg:text-3xl">Client are Interested for <a className="text-red-500">Logistic</a> Service of Ocean Freight</div>                
            <div className="text-base md:text-md lg:text-lg">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</div>
        </div>
        <Slider  {...settings}>
            {data.map((item)=>(
                    <div className="w-full p-3 group ">
                        <div className="w-full relative">{item.img}
                        <div className="bg-black opacity-60 top-0  absolute w-full h-full hidden group-hover:block"/>
                        <div className="hidden group-hover:block absolute w-full bottom-10 text-white bottom-2 space-y-5 text-center">
                           <div className="font-serif text-lg md:text-xl">{item.ProjectName}</div>
                            <div className="font-bold text-xl md:text-2xl">{item.jProductName}</div>
                        </div>
                        </div>
                    </div>
                 
            ))}
         
        </Slider>   
      
    </div>)
}
export default OurProject