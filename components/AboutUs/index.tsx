import React from "react";

const AboutUs = () =>{
    return(<div className="py-10 md:py-20 space-y-10 md:space-y-0 md:flex md:space-x-10">
        <div className="md:flex md:space-x-10 space-y-10 md:space-y-0">
            <div className="space-y-5 w-full md:w-1/2">
                <div className="space-y-1 "
                 data-sal="fade-In"
                 data-delay="1000"
                 data-sal-duration={500}>
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl " >Recent News</div>
                    <div className="flex  space-x-1">
                        <div className="border-2 border-red-500 rounded-full w-1" />
                        <div className="border-2 border-red-500 rounded-l-lg w-20" />
                    </div>
                </div>
                <div className="font-bold text-2xl md:text-3xl lg:text-4xl"
                 data-sal="fade-In"
                 data-delay="1000"
                 data-sal-duration={500}
                >How to <a className="text-red-500">Logistic</a> Activities Good Solution of Business in the world</div>
                <div className="font-semibold text-gray-500 text-md md:text-lg lg:text-xl"  data-sal="fade-In"
          data-delay="1000"
          data-sal-duration={500}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</div>
                <div className="text-md md:text-lg lg:text-xl"
                 data-sal="fade-In"
                 data-delay="1000"
                 data-sal-duration={500}>Web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their over infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the liking of all.</div>
            </div>
            <div  data-sal="fade-In"
          data-delay="1000"
          data-sal-duration={500} className="md:w-1/2 w-full space-y-5">
                <div className="flex space-x-5">
                    <img className="w-full" src="/img/1.jpg"/>
                    <img className="w-full" src="/img/2.jpg"/>
                </div>
                <div >
                <video className="w-full" controls={true}>
                     <source  src="www.youtube.com/watch?v=3bGNuRtlqAQ" type="video/mp4" />
                </video>
                </div>
            </div>
        </div>
    </div>)
}
export default AboutUs