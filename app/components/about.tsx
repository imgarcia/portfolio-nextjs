import Image from 'next/image'
import React from 'react'
import Skillset from './skills'

const About = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col pt-[15%] gap-10 md:w-[75%] 2xl:w-[50%] xl:px-10"
    >
      <h2 className="section-title">About Me</h2>
      <p className="text-center">Add a small blurb here.</p>

      <Skillset />
    </section>
  )
}

export default About
