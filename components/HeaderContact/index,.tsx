import React from "react";
import {FiPhoneCall} from "react-icons/fi"
import {AiOutlineMail ,AiOutlineTwitter} from "react-icons/ai"
import {GrFacebookOption} from "react-icons/gr"
import {BiWorld} from "react-icons/bi"
import {FaYoutube} from "react-icons/fa"
const HeaderContact = () => {
    const icon = [{icon: <GrFacebookOption />, href:""},
    {icon:<AiOutlineTwitter /> , href:""},
    {icon:<BiWorld /> , href:""},
    {icon:  <FaYoutube /> , href:""}]
    return(<div className="bg-red-500 py-4" data-sal={"slide-up"} data-sal-delay={"100"} data-sal-easing={"slide-down"}>
        <div className="container mx-auto px-5 md:px-40  text-white font-semibold">
            <div className="flex justify-between">
                <div className="flex space-x-5">
                    <div className="flex space-x-2 items-center text-md lg:text-lg">
                        <FiPhoneCall />
                        <div>+451236981</div>
                    </div>
                    <div className="flex space-x-2 items-center text-md lg:text-lg">
                        <AiOutlineMail />
                        <a href="mailto:someone@yoursite.com?subject=Mail from Our Site" className="text-white">example@gmail.com</a>  
                    </div>
                </div>
                <div className="flex space-x-1 md:space-x-2 items-center text-md lg:text-lg">
                    {icon.map((item)=>(
                        <a href={item.href} className="text-white text-md md:text-lg lg:text-xl">
                            {item.icon}
                        </a>
                    ))}
                     <div
                  className="lang text-xl inline-flex space-x-4 text-gray-400 hidden md:block"
                  style={{}}
                  key="t-8"
                >
                    <select name="lang" id="lang">
                        <option>
                        <a
                    className="relative langu hover:text-gray-100 duration-500 text-white"
                    href="/en"
                  >
                    English
                  </a>
                        </option>
                        <option>
                        <a
                    className="relative langu hover:text-gray-100 duration-500 text-white "
                    href="/mn"
                  >
                    Mongolia
                  </a>
                        </option>
                    </select>
               
              
                </div>

                </div>
            </div>
        </div>
    </div>)
}
export default HeaderContact