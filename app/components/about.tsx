import Image from 'next/image'
import Skillset from './skillset'

const About = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col pt-[15%] gap-10 md:w-[75%] 2xl:w-[50%] xl:px-10 "
    >
      <h2 className="section-title">About</h2>
      <p className="text-center text-xl">
        As a frontend software engineer, I enjoy bridging the gap between design
        and engineering utilizing my technical knowledge and experience. I have
        experience developing and designing software for the web, from simple
        landing pages to web applications. My aim is to consistently develop
        applications that are both scalable and efficient, while delivering
        flawlessly designed user experiences.
      </p>

      <p className="text-center text-xl">
        When I'm not in front on my computer screen, I'm enjoying time with my
        family, trying to watch or catch up on sports, or completing a DIY
        project.
      </p>

      <Skillset />
    </section>
  )
}

export default About
