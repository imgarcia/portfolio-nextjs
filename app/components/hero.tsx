'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/dist/SplitText'

import Image from 'next/image'

const Hero = () => {
  const containerRef = useRef()

  useGSAP(
    () => {
      const heroTextIntroTl = gsap.timeline({
        delay: 0.5,
      })
      heroTextIntroTl.to('.hero-text-intro-container-wrapper', {
        opacity: 1,
      })

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

      const heroTextDescriptionTl = gsap.timeline({
        delay: 2,
      })
      heroTextDescriptionTl.to('.hero-text-description-container-wrapper', {
        opacity: 1,
      })

      // animate hero description lines
      let splitDescription = SplitText.create('.hero-text-description', {
        type: 'chars, words, lines',
      })
      gsap.from(splitDescription.words, {
        opacity: 0,
        delay: 1,
        y: 100,
        ease: 'power2.inOut',
        // duration: 1.25,
        stagger: 0.35,
      })

      // scroll animation
      gsap.to('.animated-circle', {
        scale: 10,
        opacity: 1,
        ease: 'none',
        duration: 3,
        overflowX: 'hidden',
        scrollTrigger: {
          trigger: '#about',
          // markers: true,
          scrub: 1,
          start: 'top',
          end: window.innerHeight,
        },
      })
    },
    { scope: containerRef }
  ) // Associate the animations with the ref

  return (
    <section className="hero-section">
      <section
        ref={containerRef}
        id="about"
        className="min-h-screen min-w-screen flex flex-col gap-10 xl:px-10 flex-center"
      >
        <div className="xl:w-[50%] w-screen flex-v-center">
          <div className="rounded-full border-[3px] border-brown-1 overflow-hidden z-10">
            <Image
              src="/images/mg-profile.jpeg"
              alt="mario garcia profile image"
              width={225}
              height={225}
              className="portfolio-portrait-img transition-all transform duration-500 hover:w-[235px]"
            />
          </div>
          <div className="absolute rounded-full bg-[#1e2a2e] bg-opacity-50 overflow-hidden w-[225px] h-[225px] animated-circle"></div>
        </div>

        <div className="xl:w-[50%] w-screen text-center">
          <div className="hero-text-intro-container-wrapper opacity-0">
            <div className="hero-text-intro-container">
              <h2 className="text-2xl mb-3 hero-text-hello">Hello. I'm</h2>
              <h1 className="text-6xl hero-text-name">Mario Garcia.</h1>
              <h2 className="text-2xl mt-5 hero-text-jobtitle">
                A Frontend Software Engineer.
              </h2>
            </div>
          </div>

          <div className="my-8 h-2 border-t-2 w-[15%] border-divider-1 m-auto" />

          <div className="hero-text-description-container-wrapper opacity-0">
            <div className="hero-text-description-container">
              <p className="text-brown-5 text-xl xl:w-[65%] m-auto hero-text-description">
                An engineer passionate about building accessible and user
                friendly web applications and web sites.{' '}
              </p>
            </div>
          </div>

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
    </section>
  )
}

export default Hero
