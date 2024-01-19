import React from 'react'
import "./Plans.css"
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"
const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
      </div>
      {/*plans card */}
      <div className="plans">
        {plansData.map((plan,i)=>{
            const {icon,name,price}=plan
            return(
          <div className='plan' key={i}>
            {icon}
          <span>{name}</span>
          <span>{price}.RS</span>
          <div className="features">
            {plan.features.map((features,i)=>{
                return(
                    <div className="feature" >
             <img src={whiteTick} alt="" />
             <span key={i}>{features}</span></div>)
            })}
          </div>
          <div>
            <span>see more benifits --</span>
          </div>
          <button className="btn">Join now</button>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Plans
