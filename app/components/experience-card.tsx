import { Experience } from '@/constants'
import Link from 'next/link'

const Card = ({
  startDate,
  endDate,
  companyName,
  jobTitle,
  description,
  techStack,
}: Omit<Experience, 'companyUrl'>) => {
  return (
    <div
      key={companyName}
      className="flex flex-col gap-5 md:flex-row p-5 badge hover:bg-dark-2 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="text-sm w-[150px] flex-grow-0 flex-shrink-0">
        {startDate} - {endDate}
      </div>
      <div className="flex flex-col">
        <h3 className="text-md text-brown-1 leading-none mb-3">
          {companyName} • <span className="italic">{jobTitle}</span>
        </h3>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {techStack.map((tech: string) => (
            <div key={tech} className="badge text-xs px-3 py-2">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ExperienceCard = ({
  companyUrl,
  startDate,
  endDate,
  companyName,
  jobTitle,
  description,
  techStack,
}: Experience) => {
  if (companyUrl) {
    return (
      <Link href={companyUrl} target="_blank">
        <Card
          startDate={startDate}
          endDate={endDate}
          companyName={companyName}
          jobTitle={jobTitle}
          description={description}
          techStack={techStack}
        />
      </Link>
    )
  }

  return (
    <Card
      startDate={startDate}
      endDate={endDate}
      companyName={companyName}
      jobTitle={jobTitle}
      description={description}
      techStack={techStack}
    />
  )
}

export default ExperienceCard
