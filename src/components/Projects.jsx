import NormalText from './NormalText'
import { projects } from '../data'

/* eslint-disable react/prop-types */
export default function Projects() {
  return (
    <section className="pt-4 flex flex-col gap-8" id="projects">
      <h2>My projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-auto-fit-20 gap-4">
        {projects.map((project) => (
          <li
            className="flex flex-col gap-4 p-4 bg-zinc-900 rounded-md border-[1px] border-zinc-800"
            key={project.id}>
            <h3 className="text-green-500 font-[Inter] font-bold tracking-wide capitalize">
              {project.name}
            </h3>
            <div>
              <img src={project.imageUrl} alt={project.name} />
            </div>
            <p className="line-clamp-4">
              <NormalText>{project.description}</NormalText>
            </p>
            <div className="flex gap-4">
              <a
                className="underline self-start hover:text-orange-500"
                href="#">
                <NormalText>Github</NormalText>
              </a>
              <a
                className="underline self-start hover:text-orange-500"
                href="#">
                Preview
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
