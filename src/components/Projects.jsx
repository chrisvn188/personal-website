import NormalText from './NormalText'

const projects = [
  {
    id: crypto.randomUUID(),
    name: 'Youtube clone',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
    imageUrl: '/images/youtube-clone.png',
    githubUrl: 'fake github url',
    liveUrl: 'fake live url',
  },
  {
    id: crypto.randomUUID(),
    name: 'Instagram Clone',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    imageUrl: '/images/instagram-clone.png',
    githubUrl: 'fake github url',
    liveUrl: 'fake live url',
  },
  {
    id: crypto.randomUUID(),
    name: 'X Clone',
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    imageUrl: '/images/twitter-clone.png',
    githubUrl: 'fake github url',
    liveUrl: 'fake live url',
  },
  {
    id: crypto.randomUUID(),
    name: 'Personal Website',
    description:
      'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
    imageUrl: '/images/personal-website.png',
    githubUrl: 'fake github url',
    liveUrl: 'fake live url',
  },
]

/* eslint-disable react/prop-types */
export default function Projects() {
  return (
    <section className="flex flex-col gap-8" id="projects">
      <h2 className="text-2xl font-bold font-[Inter] capitalize">
        My projects
      </h2>
      <ul className="grid grid-cols-auto-fit-20 gap-4">
        {projects.map((project) => (
          <li
            className="flex flex-col gap-4 p-4 bg-zinc-900 rounded-md border-[1px] border-zinc-800 hover:border-green-900"
            key={project.id}>
            <h3 className="text-green-500 font-[Inter] font-bold text-lg tracking-wide capitalize">
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
                Github
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
