import React from 'react'
import './skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'

export const Skills = () => {
  return (
    <div>
      <div id='skills' className="about-skills">
        <div className="skills-title">
           <h1> Skills </h1>
           <img src={theme_pattern} alt="" />
        </div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'60%'}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:'70%'}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:'60%'}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:'60%'}}/></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:'70%'}}/></div>
                <div className="about-skill"><p>GIT & GITHIUB</p><hr style={{width:'70%'}}/></div>
            
     </div>

    </div>
  )
}
