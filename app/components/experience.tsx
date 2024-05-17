import { experiences } from '@/constants'
import ExperienceCard from './experience-card'
import Link from 'next/link'

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col pt-[15%] gap-10 md:w-[75%] 2xl:w-[50%] xl:px-10"
    >
      <h2 className="section-title">Experience</h2>
      <div className="flex flex-col gap-10">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.companyName} {...exp} />
        ))}
      </div>
      <div className="flex-center">
        <Link
          href="/docs/Mario-Garcia-Resume-2024.pdf"
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
