import { skills } from '@/constants'

const Skillset = () => {
  return (
    <section id="skillset">
      <h2 className="section-title mt-20">Skillset</h2>
      <p className="text-center mt-5">
        Technologies I've been working with recently.
      </p>
      <div className="mt-10 flex-center flex-wrap gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="transition px-3 py-2 rounded-lg bg-dark-1 bg-opacity-50 backdrop-blur-md hover:scale-110"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skillset
