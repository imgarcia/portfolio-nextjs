import Image from 'next/image'

const Hero = () => {
  return (
    <section
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
            className="transition-all transform duration-500 hover:w-[235px]"
          />
        </div>
      </div>
      <div className="basis-1/2 text-center">
        <h2 className="text-2xl text-gradient mb-3">Hello. I'm</h2>
        <h1 className="text-6xl text-gradient">Mario Garcia.</h1>
        <h2 className="text-2xl text-gradient mt-5">
          A Frontend Software Engineer.
        </h2>
        <div className="my-8 h-2 border-t-2 w-[15%] border-divider-1 m-auto" />
        <p className="text-brown-5 text-xl xl:w-[65%] m-auto">
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
