import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pp from '../../assets/pp.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
           
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={pp} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a UI/UX designer passionate about creating intuitive and impactful digital experiences. With a background in Information Systems, I’ve worked on projects like redesigning online systems and developing gamified investment apps, merging creativity with functionality to deliver user-centered solutions. I thrive on collaboration and believe great design can drive meaningful change.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>UI/UX Design</p><hr style={{width: "90%"}}/></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>MySQL</p><hr style={{width: "30%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>Years Experiences</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>
        </div>
    </div>
  )
}

export default About