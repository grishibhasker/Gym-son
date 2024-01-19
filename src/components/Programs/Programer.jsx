import React from 'react'
import "./Programs.css"
import {programsData1} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
const Programer = () => {
  return (
    <div className='Programs' id='programs'>
      {/*Header of a program */}
      <div className="programs-header">
        <span className='stroke-text'> Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>
      <p></p>
      <div className="programs-categories">
        {programsData1.map((program)=>{
          const {image,heading,details}=program
         return(
          <div className="category">
            {image}
           <span>{heading}kk</span>
           <span>{details}</span>
           <div className="join-now"><span>Join now</span><img src={RightArrow} alt="" /></div>
          </div>
)
        })}
      </div>
    </div>
  )
}

export default Programer
