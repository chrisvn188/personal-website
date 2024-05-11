import NormalText from './NormalText'

/* eslint-disable react/prop-types */
export default function NavigationMenu({ tabs, onTabClick }) {
  return (
    <menu className="flex gap-4 flex-wrap">
      {tabs.map(({ name, icon }) => (
        <li key={name}>
          <button
            className="px-3 py-2 bg-zinc-900 rounded-md flex items-center gap-3 border-[1px] border-solid border-zinc-800 w-full hover:bg-orange-500 hover:text-orange-950"
            onClick={() => onTabClick(name)}>
            {icon}
            <NormalText textTransform="capitalize">{name}</NormalText>
          </button>
        </li>
      ))}
    </menu>
  )
}
