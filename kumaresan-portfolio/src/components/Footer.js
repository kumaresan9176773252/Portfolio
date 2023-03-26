import "./FooterStyles.css";

import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      
<div className="footer-container">
<div className="left">
    <div className="location">
        <FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
        <div>
        <p>Ezhil Nagar , Perumbakkam</p>
        <p>Chennai</p>
        </div>
    </div>
    <div className="phone">
    <h4><FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/>9176773252</h4>
    </div>
    <div className="email">
    <h4><FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>Kumara2275012@gmail.com</h4>
    </div>
</div>

<div className="right">
<h4>About Me</h4>
<p>As a mechanical engineer, I bring a strong foundation in problem-solving and 
analytical skills to the IT industry. With a passion for technology and a desire to learn
 new skills, I am eager to make the transition and contribute to innovative solutions.</p>
 <div className="social">
 <a href="https://github.com/kumaresan9176773252/Kumaresan-Portfolio"><FaGithub size={30} style={{color:"#fff" , marginRight:"1rem"}}/></a>
 <a href="https://web.whatsapp.com/"><FaWhatsapp size={30} style={{color:"#fff" , marginRight:"1rem"}}/></a>
 <a href="https://www.linkedin.com/in/kumaresan-s-5246301a0/"><FaLinkedin size={30} style={{color:"#fff" , marginRight:"1rem"}}/></a>
 </div>
</div>

</div>

    </div>
  )
}

export default Footer
