import { projects } from '../data'

const Projects = () => {
  return (
    <section className="relative border border-dashed rounded-sm border-zinc-700 p-4 md:p-12 ">
      <p className="bg-green-500 text-green-950 p-2 md:px-4 inline-block right-[2rem] bottom-full rounded-t-md absolute font-medium tracking-widest">
        My latest projects
      </p>
      <div className="grid lg:grid-cols-2 gap-12">
        {projects.map((project) => (
          <article
            className="group grid rounded-sm overflow-hidden"
            key={project.id}>
            <div className="lg:max-h-[15rem]">
              <img
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all"
                src={project.imageUrl}
                alt={project.name}
              />
            </div>
            <div className="grid gap-2 bg-zinc-800 border-zinc-700 border p-4">
              <h3 className="">{project.name}</h3>
              <p className="line-clamp-3 text-zinc-400 md:text-lg">
                {project.description}
              </p>
              <div className="flex gap-4 pt-4 pb-2">
                <button className="px-3 py-1 rounded-sm capitalize bg-zinc-50 text-zinc-950">
                  github 🔗
                </button>
                <button className="px-3 py-1 rounded-sm capitalize bg-zinc-50 text-zinc-950">
                  live 🔗
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
