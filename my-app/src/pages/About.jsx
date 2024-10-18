import React from 'react'

import './about.css'


function About({isLoggedIn}) {
  return (
    <div className='about'>
      <h1>This is about page</h1>
      <p>Hello there <br /> How are You do</p>

      <button onClick="button">Click Me</button>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
  )
}

export default About
