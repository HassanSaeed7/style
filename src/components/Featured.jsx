import React from 'react'
import Img1 from "../assets/9.jpg"
import Img2 from "../assets/6.jpg"

const Featured = () => {
  return (
    <section className="featured-section" data-scroll-section>

      <div className="featured-row-layout">
        <h6>TIME</h6>
        <img src={Img1} data-scroll/>

      </div>

      <div className="featured-column-layout">
        <h6>glow</h6>
        <img src={Img2} data-scroll/>

      </div>
        
    </section>
  )
}

export default Featured