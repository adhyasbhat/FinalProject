import React, { useState } from 'react';
import '../Siderbar/Sidebar.css'

import {
    FaTh,
    FaBars,
    FaUserAlt,
    
    FaCommentAlt,
    FaShoppingBag,
  
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/myprofile",
            name:"My Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/home",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/chart",
            name:"Chart",
            icon:<FaCommentAlt/>
        },
       
        {
            path:"/login",
            name:"Log out",
            icon:<FaShoppingBag/>

        }

    ]
    return (
        <div className="container mt-2">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   
                   <div style={{marginLeft: isOpen ? "150px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon mt-4">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;