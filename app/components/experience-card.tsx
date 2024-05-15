'use client'

import { Experience } from '@/constants'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

const Card = ({
  startDate,
  endDate,
  companyName,
  jobTitle,
  description,
  techStack,
  projects,
  companyUrl
}: Experience) => {
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
          {companyUrl ?
            <Link href={companyUrl} target="_blank" aria-label="Open employer company website in a new tab" title="Open employer company website in a new tab">{companyName} • <span className="italic">{jobTitle}</span></Link>
            : <div>{companyName} • <span className="italic">{jobTitle}</span></div>
          }
        </h3>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {techStack.map((tech: string) => (
            <div key={tech} className="badge text-xs px-3 py-2">
              {tech}
            </div>
          ))}
        </div>
        {projects &&
          <>
            <h3 className="mt-5 mb-3 text-brown-1">Projects</h3>
            <div className="flex flex-wrap gap-2">
              {projects?.map(({ name, url }) => (
                <div key={name} >
                  <Link href={url} target="_blank" aria-label={`Open project ${name} in new tab`} title={`Open project ${name} in new tab`} className="badge text-xs px-3 py-2 hover:bg-brown-2">{name}</Link>
                </div>
              ))}
            </div>
          </>
        }
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
  projects
}: Experience) => {
  const handleDivOnClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    window.open(companyUrl, '_blank')
  }

  if (companyUrl) {
    return (
      <div onClick={(e) => handleDivOnClick(e)} className="hover:cursor-pointer">
        <Card
          startDate={startDate}
          endDate={endDate}
          companyName={companyName}
          companyUrl={companyUrl}
          jobTitle={jobTitle}
          description={description}
          techStack={techStack}
          projects={projects}
        />
      </div>
    )
  }

  return (
    <Card
      startDate={startDate}
      endDate={endDate}
      companyName={companyName}
      companyUrl={companyUrl}
      jobTitle={jobTitle}
      description={description}
      techStack={techStack}
      projects={projects}
    />
  )
}

export default ExperienceCard
