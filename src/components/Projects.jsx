import { projects } from '../data'
import Section from './Section'

const Projects = () => {
  return (
    <Section text="Latest projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            className="group grid rounded-md overflow-hidden bg-zinc-900 border-zinc-800 border"
            key={project.id}>
            <div className="aspect-video">
              <img
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all"
                src={project.imageUrl}
                alt={project.name}
              />
            </div>
            <div className="grid gap-2 p-4 sm:p-8">
              <h3 className="">{project.name}</h3>
              <p>{project.description}</p>
              <div className="flex gap-6 pt-4 pb-2">
                <a
                  href={project.githubUrl}
                  className="capitalize underline flex gap-1 items-center">
                  <span>github</span>
                  <svg
                    className="w-4 h-4"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                  </svg>
                </a>
                <a
                  href={project.liveUrl}
                  className="capitalize underline flex gap-1 items-center">
                  <span>live</span>
                  <svg
                    className="w-4 h-4"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects
