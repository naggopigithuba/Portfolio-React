import React from 'react'
import "./Hero.css"; 
import img from '../../../assets/img.jpg'
 


const Hero = () => {
  return (
    <div  id='hero' className='hero'>
        <img src={img}  />
        <h1><span>I`m Nagagopi Korne,</span> I am intersted Web Developer,Front-End Developer,Data Analyst based in India</h1>
         <div className='hero-action'>
         <div className="hero-resume">
           <a href='https://drive.google.com/file/d/1B_X2rNL-zV_d2ZLNz3Pf-LjnlO_n8LT5/view?usp=sharing'>My Resume</a>
           
          </div>
         </div>
    </div>
  )
}

export default Hero 