import Link from 'next/link'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-divider-1 pt-5 text-center text-xs">
      <p>
        {currentYear} - Handcrafted using{' '}
        <Link
          href="https://code.visualstudio.com/"
          className="font-semibold text-brown-1 hover:hover:text-brown-5"
        >
          Visual Studio Code
        </Link>{' '}
        by me. Built using{' '}
        <Link
          href="https://nextjs.org/"
          className="font-semibold text-brown-1 hover:hover:text-brown-5"
        >
          Next.js
        </Link>{' '}
        and{' '}
        <Link
          href="https://tailwindcss.com/"
          className="font-semibold text-brown-1 hover:hover:text-brown-5"
        >
          Tailwind CSS
        </Link>
        , deployed with{' '}
        <Link
          href="https://vercel.com/"
          className="font-semibold text-brown-1 hover:hover:text-brown-5"
        >
          Vercel
        </Link>
        .
      </p>
    </footer>
  )
}

export default Footer
