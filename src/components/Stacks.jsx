import { useState } from 'react'
import { stacks } from '../data'
import NormalText from './NormalText'

/* eslint-disable react/prop-types */
export default function Stacks() {
  const [activeIndex, setActiveIndex] = useState(0)

  const stackCategories = Array.from(
    new Set(stacks.map((stack) => stack.category))
  )

  const currentActiveCategory = stackCategories[activeIndex]

  const activeStyles = 'bg-orange-500 text-orange-950'

  function handleClickTab(index) {
    setActiveIndex(index)
  }

  return (
    <section className="flex flex-col gap-8" id="stacks">
      <h2 className="text-2xl font-bold font-[Inter] capitalize">
        Technology Stacks
      </h2>

      <div className="flex rounded-md overflow-clip self-start border-[1px] border-solid border-zinc-800">
        {stackCategories.map((category, index) => (
          <button
            key={category}
            className={`bg-zinc-900 capitalize px-3 py-2 hover:bg-orange-500 hover:text-orange-950 ${
              activeIndex === index ? activeStyles : ''
            }`}
            onClick={() => handleClickTab(index)}>
            <NormalText>{category}</NormalText>
          </button>
        ))}
      </div>

      <ul className="flex flex-wrap gap-4">
        {stacks
          .filter((stack) => stack.category === currentActiveCategory)
          .map((stack) => (
            <li key={stack.id}>
              <span className="inline-block px-3 py-2 bg-green-500 text-green-950 rounded-full">
                {stack.name}
              </span>
            </li>
          ))}
      </ul>
    </section>
  )
}
