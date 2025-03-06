import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import img from '../../assets/img.jpg'

const About = () => {
  return (
    <div id='about'   className='about'>
        <div className="about-title">
            <h1>About Me</h1>
             <img src={theme_pattern} alt="" /> 
        </div>
        <div className="about-section">


        <div className='about-right'>
            
            <img src={img} alt="profile" />
        </div>

           <div className="about-left">
           <div className="about-para">
                <p>"Hello, I’m Nagagopi Korne, a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. I have experience in building dynamic web applications using React.js and have a good understanding of Python and SQL for back-end development. Additionally, I am familiar with basic data analysis using NumPy and Pandas. As a fresher, I am eager to apply my skills and continue learning to contribute to exciting projects and grow in the tech industry."</p>
            </div>
            
            </div>

        </div>
        
        
       

    </div>
  )
}

export default About