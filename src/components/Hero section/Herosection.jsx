import React from 'react'
import "./Herosection.css"
import Header from '../Header/Header'
import hero_image_back from "../../assets/hero_image_back.png"
import hero_image from "../../assets/hero_image.png"
import Heart from "../../assets/heart.png"

import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
const Herosection = () => {
  const mobile=window.innerWidth<=768?true:false;
  const transition ={type:'spring',duration:3}
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
      <div className="left-h"> 
      <Header/>
      {/*The best ad */}
      <div className="the-best-ad">
        <motion.div
        initial={{left:mobile?"168px":"238px"}}
        whileInView={{left:"8px"}}
        transition={{...transition,type:"tween"}}
        ></motion.div>
      <span>the best fitness club in the  town  </span>
      </div>
      {/*Hero heading */}
      <div className="hero-text">
        <div>
            <span className='stroke-text'>Shape </span>
            <span> Your</span>
        </div>
        <div>
            <span>Ideal Body</span>
        </div>
        <div className="span">
            <span>Once you are exercising regularly, the hardest thing is to stop it</span>
        </div>
      </div>
      {/*Figures */}
      <div className="figures">
        <div>
        <span>+140</span>
        <span>Expert coaches</span>
        </div>
        <div>
        <span>+978</span>
        <span>members joined</span>
        </div>
        <div>
        <span>+50</span>
        <span>fitness program</span>
        </div>
      </div>
      {/*Hero button */}
      <div className="hero-button">
        <button className="btn">Get Started</button>
        <button className="btn"> Learn More </button>
      </div>
      </div>
      <div className="right-h">

      <div className="btn">Join Us</div>
       
     
     <motion.div 
      initial={{right:"-1rem"}}
      whileInView={{right:"4rem"}}
      transition={transition}
     className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span> 116 bpm</span>
     </motion.div>
     {/*Hero images */}
     
     <img src={hero_image} alt="" className='hero-image' />
    <motion.img
    initial={{right:"11rem"}}
    whileInView={{right:"20rem"}}
    transition={transition}
     src={hero_image_back} alt="" className='hero-image-back' />
     {/*calories */}
     
     <motion.div 
     initial={{right:"40rem"}}
     whileInView={{right:"28rem"}}
     transition={transition}className="calories">
        <img src={Calories} alt="" />
        <div>
            <span>Calories Burned</span>
        <span>220 Kcal</span>
        </div>
        
     </motion.div>
      </div>
    
    </div>
  )
}

export default Herosection
