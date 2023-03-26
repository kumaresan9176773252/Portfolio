import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email ID</label>
        <input type="email" placeholder="Kumara2275012@gmail.com"></input>
        <label>Contact Number</label>
        <input type="tel" placeholder="9176773252"></input>
        <label>Message</label>
        <textarea row="6" placeholder="Type Your Message Here"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
