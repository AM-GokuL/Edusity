import React from 'react'
import "./About.css";
import about_img from "../../Assets/about.png";
import play_icon from "../../Assets/play-icon.png"

const About = ({setplayState}) => {
  return (
    <div className='about'>
        <div className="aboutleft">
            <img src={about_img} alt="" className='about_img'/>
            <img src={play_icon} alt="" className='play_icon' onClick={()=>{setplayState(true)}}/>
        </div>
        <div className="aboutright">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Welcome to our educational institution, where 
            knowledge meets innovation. We strive to cultivate a dynamic learning environment that inspires curiosity and fosters academic excellence. With dedicated faculty and state-of-the-art facilities, we are committed to preparing students for success
            in an ever-evolving world</p>
            <p>Welcome to our educational institution, where 
            knowledge meets innovation. We strive to cultivate a dynamic learning environment that inspires curiosity and fosters academic excellence. With dedicated faculty and state-of-the-art facilities, we are committed to preparing students for success
            in an ever-evolving world</p>
            <p>Welcome to our educational institution, where 
            knowledge meets innovation. We strive to cultivate a dynamic learning environment that inspires curiosity and fosters academic excellence. With dedicated faculty and state-of-the-art facilities, we are committed to preparing students for success
            in an ever-evolving world</p>
        </div>
    </div>
  )
}

export default About