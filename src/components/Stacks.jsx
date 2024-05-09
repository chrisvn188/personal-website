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
    <section className="pt-4 flex flex-col gap-8" id="stacks">
      <h2>Technology Stacks</h2>

      <div className="flex flex-col gap-4">
        <div className="flex rounded-md overflow-clip self-start border-[1px] border-solid border-zinc-800">
          {stackCategories.map((category, index) => (
            <button
              key={category}
              className={`capitalize px-3 py-2 hover:bg-orange-500 hover:text-orange-950 ${
                activeIndex === index
                  ? activeStyles
                  : 'bg-zinc-900 text-zinc-50'
              }`}
              onClick={() => handleClickTab(index)}>
              <NormalText>{category}</NormalText>
            </button>
          ))}
        </div>
        <ul className="grid grid-cols-auto-fill-12 gap-4">
          {stacks
            .filter((stack) => stack.category === currentActiveCategory)
            .map((stack) => (
              <li key={stack.id}>
                <div className="text-center p-4 border-[1px] bg-zinc-900 border-zinc-800 rounded-md flex flex-col items-center gap-4">
                  <NormalText>{stack.name}</NormalText>
                  <img src={stack.logoSrc} alt="" width={44} />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}
