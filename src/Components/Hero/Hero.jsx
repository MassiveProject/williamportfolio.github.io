import React from 'react'
import './Hero.css'
import pp from '../../assets/pp.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={pp} alt="" />
        <h1>I'm William Natan Lie, <span>UI/UX Designer</span></h1>
        <p>I am a passionate UI/UX designer dedicated to crafting visually appealing and user-friendly digital experiences.</p>
        <div className="hero-action">
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1USAaQO4RejFsbB_H7Psk0Znc0_r5IcDz/view?usp=sharing">My Resume</a></div>    
        </div>   
    </div>
  )
}

export default Hero