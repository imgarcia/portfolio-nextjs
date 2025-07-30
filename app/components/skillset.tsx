'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/dist/SplitText'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { skills } from '@/constants'

gsap.registerPlugin(SplitText, ScrollTrigger)

const Skillset = () => {
  const containerRef = useRef()

  useGSAP(() => {
    let splitFirstText = SplitText.create('.badge', {
      type: 'chars',
    })

    gsap.to(splitFirstText.chars, {
      color: '#dcbfa3',
      ease: 'none',
      stagger: 2,
      scrollTrigger: {
        trigger: '#skillset',
        // markers: true,
        scrub: 1,
        start: 'top center',
      },
    })
  })

  return (
    <section id="skillset">
      <h2 className="section-title mt-20">Skillset</h2>
      <p className="text-center mt-5">
        Technologies I've been working with recently.
      </p>
      <div className="mt-10 flex-center flex-wrap gap-5">
        {skills.map((skill) => (
          <div key={skill} className="text-sm badge px-3 py-2 text-[#dcbfa320]">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skillset
