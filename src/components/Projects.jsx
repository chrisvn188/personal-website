import { projects } from '../data'
import Section from './Section'

const Projects = () => {
  return (
    <Section text="Latest projects">
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            className="group grid rounded-md overflow-hidden bg-zinc-900 border-zinc-800 border"
            key={project.id}>
            <div className="lg:max-h-[15rem]">
              <img
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all"
                src={project.imageUrl}
                alt={project.name}
              />
            </div>
            <div className="grid gap-2 p-4 md:p-8">
              <h3 className="">{project.name}</h3>
              <p className="line-clamp-3 text-zinc-400 md:text-lg">
                {project.description}
              </p>
              <div className="flex gap-4 pt-4 pb-2">
                <button className="px-3 py-1 rounded-md capitalize bg-zinc-50 text-zinc-950">
                  github 🔗
                </button>
                <button className="px-3 py-1 rounded-md capitalize bg-zinc-50 text-zinc-950">
                  live 🔗
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects
