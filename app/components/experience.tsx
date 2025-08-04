'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { experiences } from '@/constants'
import ExperienceCard from './experience-card'
import Link from 'next/link'

const Experience = () => {
  const containerRef = useRef()

  useGSAP(() => {
    const cOne = 1
    const childOne = document.querySelector(
      `.experience-card:nth-child(${cOne})`
    )
    gsap.to(childOne, {
      x: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        scrub: 1,
        trigger: childOne,
        start: 'top 90%',
        end: 'bottom 80%',
      },
    })
    const cTwo = 2
    const childTwo = document.querySelector(
      `.experience-card:nth-child(${cTwo})`
    )
    gsap.to(childTwo, {
      x: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        scrub: 1,
        trigger: childTwo,
        start: 'top 90%',
        end: 'bottom 80%',
      },
    })
    const cThree = 3
    const childThree = document.querySelector(
      `.experience-card:nth-child(${cThree})`
    )
    gsap.to(childThree, {
      x: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        scrub: 1,
        trigger: childThree,
        start: 'top 90%',
        end: 'bottom 80%',
      },
    })
    const cFour = 4
    const childFour = document.querySelector(
      `.experience-card:nth-child(${cFour})`
    )
    gsap.to(childFour, {
      x: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        scrub: 1,
        trigger: childFour,
        start: 'top 90%',
        end: 'bottom 80%',
      },
    })
    const cFive = 5
    const childFive = document.querySelector(
      `.experience-card:nth-child(${cFive})`
    )
    gsap.to(childFive, {
      x: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        scrub: 1,
        trigger: childFive,
        start: 'top 90%',
        end: 'bottom 80%',
      },
    })
  })

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col pt-[15%] gap-10 md:w-[75%] 2xl:w-[50%] xl:px-10 z-10"
    >
      <h2 className="section-title">Experience</h2>
      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0

          return (
            <ExperienceCard key={exp.companyName} {...exp} isEven={isEven} />
          )
        })}
      </div>
      <div className="flex-center">
        <Link
          href="/docs/Mario-Garcia-Resume.pdf"
          target="_blank"
          className="text-brown-5 hover:text-brown-1"
        >
          View full resume
        </Link>
      </div>
    </section>
  )
}

export default Experience
