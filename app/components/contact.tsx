import Link from 'next/link'

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col pt-[15%] gap-10 md:w-[75%] 2xl:w-[50%] xl:px-10 text-brown-5"
    >
      <h1 className="section-title">Get In Touch</h1>

      <p className="text-center text-xl">
        I'm currently looking for new career opportunities or freelance projects
        to take on.{' '}
      </p>

      <p className="text-center text-xl">
        If you think I would be a great fit to collaborate it, shoot me a
        message via email or on LinkedIn.
      </p>

      <div className="flex-center gap-10">
        <Link
          href="mailto:mario.garcia1@live.com"
          className="group mt-10 pt-[8px]"
          rel="noreferrer noopener"
          target="_blank"
          title="Send Email"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg svg-email"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-brown-5 group-hover:stroke-brown-1"
              />{' '}
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                strokeWidth="1"
                strokeLinecap="round"
                className="stroke-brown-5 group-hover:stroke-brown-1"
              />{' '}
            </g>
          </svg>
        </Link>

        <Link
          href="https://www.linkedin.com/in/mario-garcia-31110b78/"
          className="group mt-10 transition"
          rel="noreferrer noopener"
          target="_blank"
          title="Open LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="svg svg-linkedin stroke-brown-5 group-hover:stroke-brown-1"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default Contact
