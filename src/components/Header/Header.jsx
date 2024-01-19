import React from 'react'
import "./Header.css"
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { useState } from 'react';

const Header = () => {
  const mobile =window.innerWidth<=768 ? true :false;
  const [menuOpened,setMenuOpened]=useState(false);
  return (
    <div className='header'>
     <img src={Logo} alt="FitPanda" className='logo' />
     {menuOpened === false && mobile === true ?
     ( <div
       style={
        {backgroundColor:"var(--appColor)",
      padding:"0.5rem",
      borderRadius:"5px"
    }}
    onClick={()=>{setMenuOpened(true)}}
     > <img src={Bars} style={{width:"1.5rem",height:"1.5rem"}} alt="" /></div>):
      <ul className='header-menu'>
    <a href="#">             <li onClick={()=>{setMenuOpened(false)}}>Home</li></a>
    <a href="#programs">     <li onClick={()=>{setMenuOpened(false)}}>Programs</li></a>
    <a href="#reasons">      <li onClick={()=>{setMenuOpened(false)}}>Why us</li></a>
    <a href="#plans">        <li onClick={()=>{setMenuOpened(false)}}>Plans</li></a>
    <a href="#testimonials"> <li onClick={()=>{setMenuOpened(false)}}>Testimonials</li></a>
     </ul>}
    
    </div>
  )
}

export default Header
