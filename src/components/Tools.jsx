import { useState } from 'react'
import Section from './Section'
import { toolList } from '../data'

const Tools = () => {
  const categories = Array.from(new Set(toolList.map((tool) => tool.category)))
  const [active, setActive] = useState(categories[0])

  const handleTabClick = (tab) => {
    setActive(tab)
  }

  return (
    <Section leftText text="My tools">
      <div className="flex flex-col gap-8 items-center">
        <menu className="w-full md:w-auto flex flex-wrap gap-2 bg-zinc-900 p-2 border border-zinc-800 rounded-md">
          {categories.map((tab) => (
            <li
              className="grow shrink-0 md:grow-0 rounded-md overflow-hidden"
              key={tab}>
              <button
                className={`w-full p-3 ${
                  active === tab ? 'bg-brand' : ''
                } text-blue-50 hover:bg-brand/80 font-medium`}
                onClick={() => handleTabClick(tab)}
                data-tab={tab}>
                For {tab}
              </button>
            </li>
          ))}
        </menu>

        <ul className="flex flex-wrap gap-4 w-full">
          {toolList
            .filter((tool) => tool.category === active)
            .map((tool) => (
              <li
                className="flex-1 md:shrink-0 md:basis-32 md:min-w-32 p-2 md:p-4 bg-zinc-900 rounded-md border border-zinc-800"
                key={tool.id}>
                <div className="grid gap-2">
                  <div className="hidden md:grid w-12 h-12 place-items-center justify-self-center">
                    <img
                      className="h-12 justify-self-center"
                      src={tool.logoUrl}
                      alt={tool.name}
                    />
                  </div>
                  <span className="text-center">{tool.name}</span>
                </div>
              </li>
            ))}
        </ul>

        <p className="p-4 md:p-8 rounded-md bg-zinc-900 border border-zinc-800">
          I am passionate about continually expanding my web development skills.
          Every day, I learn and master new technologies, currently focusing on
          Next.js, a powerful React framework for server-side rendering and
          static site generation.
        </p>
      </div>
    </Section>
  )
}

export default Tools