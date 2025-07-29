'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/dist/SplitText'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Image from 'next/image'

gsap.registerPlugin(SplitText, ScrollTrigger)

const Hero = () => {
  const containerRef = useRef()

  useGSAP(
    () => {
      // animate hero description lines
      let splitIntroText = SplitText.create('.hero-text-intro-container', {
        type: 'chars, words, lines',
      })
      gsap.from(splitIntroText.lines, {
        opacity: 0,
        y: 100,
        ease: 'back',
        duration: 1.25,
        stagger: 0.5,
      })

      // animate hero description lines
      let splitDescription = SplitText.create('.hero-text-description', {
        type: 'chars, words, lines',
      })
      gsap.from(splitDescription.lines, {
        opacity: 0,
        delay: 2,
        y: 100,
        ease: 'back',
        duration: 1.25,
        stagger: 0.5,
      })
    },
    { scope: containerRef }
  ) // Associate the animations with the ref

  return (
    <section
      ref={containerRef}
      id="about"
      className="min-h-screen flex flex-col pt-[15%] gap-10 md:w-[75%] 2xl:w-[50%] xl:px-10"
    >
      <div className="basis-1/2 flex-center">
        <div className="rounded-full border-[3px] border-brown-1 overflow-hidden">
          <Image
            src="/images/mg-profile.jpeg"
            alt="mario garcia profile image"
            width={225}
            height={225}
            className="portfolio-portrait-img transition-all transform duration-500 hover:w-[235px]"
          />
        </div>
      </div>
      <div className="basis-1/2 text-center">
        <div className="hero-text-intro-container">
          <h2 className="text-2xl mb-3 hero-text-hello">Hello. I'm</h2>
          <h1 className="text-6xl hero-text-name">Mario Garcia.</h1>
          <h2 className="text-2xl mt-5 hero-text-jobtitle">
            A Frontend Software Engineer.
          </h2>
        </div>
        <div className="my-8 h-2 border-t-2 w-[15%] border-divider-1 m-auto" />
        <p className="text-brown-5 text-xl xl:w-[65%] m-auto hero-text-description">
          An engineer passionate about building accessible and user friendly web
          applications and web sites.{' '}
        </p>
        <div className="flex-center mt-10">
          <div className="p-2 w-auto transform animate-bounce border-2 border-brown-1 rounded-full">
            <Image
              src="/icons/down-chevron.svg"
              alt="scroll down chevron icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
