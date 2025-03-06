import React from 'react';
import './projects.css';

import theme_pattern from '../../../src/assets/theme_pattern.svg'
import login  from '../../../src/assets/login.jpg'
import Portfolio from '../../../src/assets/Portfolio.jpg'
import product from '../../../src/assets/product.png'
import Regex from '../../../src/assets/Regex.jpg'

export const Projects = () => {
  return (
    <div id='projects' className="projects-section">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="project">
        <img src={login} alt="HTML Login & Signup Form" className="project-image" />
        <h2>Basic HTML Login & Signup Form</h2>
        <p>
          A simple, static login and signup form built using HTML, CSS, and minimal JavaScript. It allows users to input credentials and shows validation messages.
        </p>
        <a href="https://github.com/naggopigithuba/Signup_Form" target="_blank" rel="noopener noreferrer" className="github-link">
          <h1>View Source Code</h1>
        </a>
      </div>

      <div className="project">
        <img src={Portfolio} alt="React Portfolio" className="project-image" />
        <h2>Portfolio Using React</h2>
        <p>
          A personal portfolio website built with React. It includes sections such as About Me, Skills, Projects, and Contact. The site is fully responsive and styled using CSS.
        </p>
        {/* <a href="https://github.com/yourusername/react-portfolio" target="_blank" rel="noopener noreferrer" className="github-link">
          View Source Code
        </a> */}
      </div>

      <div className="project">
        <img src={product} alt="Product Recommendation System" className="project-image" />
        <h2>Product Recommendation System</h2>
        <p>
          A product recommendation system using machine learning algorithms to suggest products based on user preferences and browsing history. Built using Python and various ML libraries.
        </p>
        <a href="https://github.com/naggopigithuba/Product_Recommendation_System" target="_blank" rel="noopener noreferrer" className="github-link">
          <h1>View Source Code</h1>
        </a>
      </div>

      <div className="project">
        <img src={Regex} alt="Regex in Python" className="project-image" />
        <h2>Regular Expression in Python</h2>
        <p>
          A Python program demonstrating the use of regular expressions (Regex) for tasks such as pattern matching, data validation, and text processing.
        </p>
        <a href="https://github.com/naggopigithuba/Regular-Expression-regex-" target="_blank" rel="noopener noreferrer" className="github-link">
          <h1>View Source Code</h1>
        </a>
      </div>
    </div>
  );
};