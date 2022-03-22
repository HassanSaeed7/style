import React from 'react'
import SectionHeader from './SectionHeader'

const About = () => {

  return (
    <section className={"about-section"} data-scroll-section>
      <SectionHeader title='about'/>
        <p id='headline'>
        We know it when we see it. Good design is everywhere. Even within objects of daily life. It's an exquisite wine glass, a distinctive lamp shade, or a decorative throw pillow.
Good design is more than just eye appeal though. It balances form and function. It enhances space and works in a useful way. It pulls together both purpose and posh effortlessly.
        </p>
    </section>
  )
}

export default About