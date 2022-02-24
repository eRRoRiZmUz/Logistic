import {FaFacebookF, FaYoutube} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {MdArrowRight} from "react-icons/md"

const Footer = () => {
    const FooterIcon = [{icon:<FaFacebookF/> , href:"/"} , {icon:<AiOutlineTwitter/> , href:"/"} ,
    {icon:<FaYoutube/> , href:"/"} ,]
    const FooterContact  = [{title:"Get Started", href:"/"},
    {title:"Our Team", href:"/"},
    {title:"About Us", href:"/"},
    {title:"Need Helps", href:"/"},
    {title:"Contact Us", href:"/"}]
    const FooterImg = [{img:<img src="/img/1.jpg" />},
    {img:<img src="/img/2.jpg" />},
    {img:<img src="/img/3.jpg" />},
    {img:<img src="/img/4.jpg" />},
    {img:<img src="/img/5.jpg" />},
    {img:<img src="/img/6.jpg" />}]

  return (
    <div  className="bg-[#282828] " data-sal="slide-down"
    data-delay="1000"
    data-sal-duration={1000}>
        <div className="container mx-auto px-10 md:px-40  py-10 md:py-20">
            <div className="md:flex md:space-x-5 space-y-10 md:space-y-0">
                <div className="md:w-1/3 space-y-5 text-white">
                    <div className="space-y-2.5 ">
                        <div className=" font-semibold text-lg md:text-xl lg:text-2xl">Qabid Logistic</div>
                        <div className="flex space-x-1">
                            <div className="border-2 border-red-500 rounded-full w-1" />
                            <div className="border-2 border-red-500 rounded-l-lg w-20" />
                        </div>
                    </div>
                    <div className=" text-md md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod dolor.</div>
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl">Follow Us</div>
                    <div className="flex space-x-5">
                        {FooterIcon.map((item)=>(
                            <a className="bg-red-500  p-2 rounded-full text-white hover:bg-white hover:text-black" href={item.href}>{item.icon}</a>
                        ))}
                    </div>
                </div>
                <div className="md:w-2/3 md:flex space-y-10 md:space-y-0">
                    <div className="w-full">
                    <div className="space-y-5 ">
                    <div className="space-y-2.5 ">
                        <div className=" font-semibold text-lg md:text-xl lg:text-2xl text-white">Quick Links</div>
                        <div className="flex space-x-1">
                            <div className="border-2 border-red-500 rounded-full w-1" />
                            <div className="border-2 border-red-500 rounded-l-lg w-20" />
                        </div>
                    </div>
                    {FooterContact.map((item)=>(
                        <a className="text-md md:text-lg lg:text-xl flex space-x-1 items-center text-white hover:text-red-500 hover:underline" href={item.href}>
                            <MdArrowRight />
                            {item.title}</a>
                    ))}
                    </div>
                    </div>
                    <div className="w-full">
                    <div className="space-y-5 ">
                    <div className="space-y-2.5 ">
                        <div className=" font-semibold text-lg md:text-xl lg:text-2xl text-white">Quick Links</div>
                        <div className="flex space-x-1">
                            <div className="border-2 border-red-500 rounded-full w-1" />
                            <div className="border-2 border-red-500 rounded-l-lg w-20" />
                        </div>
                    </div>
                    {FooterContact.map((item)=>(
                        <a className="text-md md:text-lg lg:text-xl flex space-x-1 items-center text-white hover:text-red-500 hover:underline" href={item.href}>
                            <MdArrowRight />
                            {item.title}</a>
                    ))}
                    </div>
                    </div>
                    <div className="w-full space-y-5 ">
                    <div className="space-y-2.5 ">
                        <div className=" font-semibold text-lg md:text-xl lg:text-2xl text-white">Contact Info</div>
                        <div className="flex space-x-1">
                            <div className="border-2 border-red-500 rounded-full w-1" />
                            <div className="border-2 border-red-500 rounded-l-lg w-20" />
                        </div>
                    </div>
                    <div className="text-white text-md md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod dolor.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
