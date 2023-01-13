import React, { useState } from 'react';
import side from "./sidebar.module.css";
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdDesktop } from 'react-icons/io';
import { AiOutlineGlobal} from 'react-icons/ai';
import { MdArchitecture } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import {FaBars}from "react-icons/fa";
import {HiOutlineDocumentDuplicate}from "react-icons/hi";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<AiOutlineHome/>
            
        },
        
        {
            path:"/analytics",
            name:"Analytics",
            icon:<IoMdDesktop/>
        },
        {
            path:"/digitalcore",
            name:"Digitalcore ▾",
            icon: <AiOutlineGlobal  />
        },
        {
            path:"/architecture",
            name:"Architecture ▾",
            icon:<MdArchitecture/>
        },
        
        {
            path:"/documentation",
            name:"Documentation",
            icon:<HiOutlineDocumentDuplicate/>
        },
        {
            path:"/team",
            name:"Team",
            icon:<AiOutlineTeam/>
        },
        {
            
            path:"/search",
            name:"Search",
            icon: <AiOutlineSearch/>
        }
    ]
    return (
        
        <>
        <div className={side.container}>
           <div style={{width: isOpen ? "200px" : "50px"}} className={side.sidebar}>
           <div className={side.top_section}>
                   <h1 style={{display: isOpen ? "block" : "none"}} className={side.logo}>DEMO</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={side.bars}>
                       <FaBars onClick={toggle}/>
                       
                   </div>
               </div>
               {
                  menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className={side.link} activeclassName={side.active}>
                        <div className={side.icon}>{item.icon}</div>
                        
                        <div style={{display: isOpen ? "block" : "none"}} className={side.link_text}>{item.name}</div>
                    </NavLink>
                ))
               }
           </div>
           <main>{children}</main>
           
        </div>
        </>
    );
};

export default Sidebar;