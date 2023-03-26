import "./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="content">
            <h1>Who Am I?</h1>
            <p>My name is Kumaresan, and I am a front-end developer who is passionate about creating engaging and user-friendly websites. As a fresher, I am eager to apply my knowledge and skills to a real-world setting and am actively seeking a front-end developer job.<br>
            </br><br></br> I have completed my education in front-end development and have gained practical experience through various projects. My expertise includes HTML, CSS, JavaScript, and React, and I am always eager to learn and improve my skills.<br>
            </br><br></br>I am a creative and detail-oriented developer who enjoys finding innovative solutions to complex problems. I thrive in fast-paced environments and am always eager to learn new technologies and techniques to improve my skills.<br>
            </br><br></br>I am excited about the opportunity to join a team of passionate developers and contribute to the development of high-quality web applications. Thank you for considering me for your front-end developer position.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
      
    </div>
  )
}

export default AboutContent;
