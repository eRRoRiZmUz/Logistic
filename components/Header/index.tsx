import React from "react";

const Header = (item:any) => {
    const MenuList =[{
        title:"Home",
        href:"/"
    },{
        title:"About",
        href:"/"
    },
    {
        title:"Service",
        href:"/"
    },
    {
        title:"Team",
        href:"/"
    },
    {
        title:"Contact",
        href:"/"
    },]
    return (
        <div
        className={`${
          item.scroll ? "fixed bg-white  " : " absolute "
        } top-0 z-50 w-full hidden md:block`}
      >
   <div className="container mx-auto px-10 md:px-40 z-50">
     

       <div className="md:flex md:justify-between items-center">
       <div>
           <img src="/logo-white.png"/>
       </div> 
       <div className="flex space-x-5 font-semibold md:text-lg lg:text-xl items-center"> 
       {MenuList.map((items)=>(
           <div className="">
          <a href={items.href} className={`${item.scroll ? "text-black" : "text-white"}`}>
          {items.title}
          </a>
           </div>
       ))}
     
       </div>
   </div>
   </div>
   </div>
    
    
    )
  }
  
  export default Header
  