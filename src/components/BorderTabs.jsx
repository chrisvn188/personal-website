import { useContext } from 'react'
import { BorderContext } from '../App'

/* eslint-disable react/prop-types */
const BorderTabs = ({ onTabClick }) => {
  const borderContext = useContext(BorderContext)
  return (
    <div className="mt-4 md:mt-0 justify-self-center flex flex-col gap-4 items-center ">
      <p>Change border styles</p>
      <menu className="flex gap-2 p-2 bg-zinc-900 border border-zinc-800  rounded-md">
        {['dashed', 'dotted', 'solid'].map((item) => (
          <button
            className={`px-4 py-2 rounded-md capitalize ${
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
