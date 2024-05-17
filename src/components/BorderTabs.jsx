import { useContext } from 'react'
import { BorderContext } from '../App'

/* eslint-disable react/prop-types */
const BorderTabs = ({ onTabClick }) => {
  const borderContext = useContext(BorderContext)
  return (
    <div className="justify-self-center flex flex-col gap-4 items-center ">
      <p>Change border styles</p>
      <menu className="flex p-2 bg-zinc-800 border border-zinc-700  rounded-md">
        {['dashed', 'dotted', 'solid'].map((item) => (
          <button
            className={`px-3 py-1 md:px-4 md:py-2 rounded-md capitalize ${
              borderContext.type === item ? 'bg-blue-700' : ''
            }`}
            onClick={onTabClick}
            key={item}>
            {item}
          </button>
        ))}
      </menu>
    </div>
  )
}

export default BorderTabs
