import React from 'react'
import dark_arrow from '../../Assets/dark-arrow.png';
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education for a better world</h1>
        <p>Our cutting edge curriculum is designed to empower students
          with the knowledge, skills, and experiences needed to excel in the dynamic 
          field of education
        </p>
        <button className="btn">Explore More<img src={dark_arrow}></img></button>
      </div>
        
    </div>
  ) 
}

export default Hero