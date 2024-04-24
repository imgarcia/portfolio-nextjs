import { experiences } from '@/constants'

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col pt-[15%] gap-10 md:w-[75%] 2xl:w-[50%] xl:px-10"
    >
      <h2 className="section-title">Experience</h2>
      <div className="flex flex-col gap-10">
        {experiences.map((exp) => (
          <div
            key={exp.companyName}
            className="flex flex-col gap-5 md:flex-row md:gap-10 justify-between p-5 badge hover:bg-dark-2 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-sm w-[250px]">
              {exp.startDate} - {exp.endDate}
            </div>
            <div>
              <h3 className="text-md text-brown-1 leading-none mb-3">
                {exp.companyName} •{' '}
                <span className="italic">{exp.jobTitle}</span>
              </h3>
              <p className="text-sm">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {exp.techStack.map((tech) => (
                  <div key={tech} className="badge text-xs px-3 py-2">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
