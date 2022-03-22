import React from 'react'
import img from "../assets/9.jpg"



const Header = () => {
  return (
    <section className="header-container" data-scroll-section>
        <ul className="header-menu">
          <li>Intro</li>
          <li>About</li>
          <li>Featured</li>
        </ul>
<img src={img} className="header-img" />
        <div className="header-div">
          
        
        
        </div>
        <h1 id='header-text'>MODERN DESIGN</h1>
    </section>
  )
}

export default Header