/* eslint-disable react/prop-types */
import { CheckCircleIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function Bio() {
  return (
    <section className="relative border border-dashed rounded-sm border-zinc-700 mt-16 p-4 md:p-12">
      <p className="bg-green-500 text-green-950 p-2 md:px-4 inline-block left-[2rem] bottom-full rounded-t-md absolute font-medium tracking-widest">
        Introduction
      </p>
      <div className="flex flex-col gap-4 md:gap-6 p-4 md:p-8 bg-zinc-800 rounded-sm border border-zinc-700 mx-auto">
        <div className="flex gap-4 items-center flex-wrap">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
            <img
              className="block w-full h-full object-cover object-top"
              src="/images/portrait.jpg"
              alt="Chris Bui"
            />
          </div>
          <hgroup className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl tracking-wider text-zinc-50 font-bold">
              Chris Bui
            </h1>
            <p className="text-zinc-400 text-base md:text-lg">
              Front-end Engineer
            </p>
          </hgroup>
        </div>
        <p className="text-zinc-400 text-base md:text-lg">
          I love the process of turning abstract ideas into practical,
          real-world applications through the power of programming.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-8">
          <Location />
          <AvailableForWork />
        </div>
      </div>
    </section>
  )
}

export function Location() {
  return (
    <div className="flex items-center gap-2 text-zinc-400 text-base md:text-lg">
      <span>
        <MapPinIcon className="text-orange-300" width={20} />
      </span>
      <span>Hanoi, Vietnam</span>
    </div>
  )
}

export function AvailableForWork() {
  return (
    <div className="flex items-center gap-2 text-zinc-400 text-base md:text-lg">
      <span>
        <CheckCircleIcon className="text-green-500" width={20} />
      </span>
      <span>Available for work</span>
    </div>
  )
}
