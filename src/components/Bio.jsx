/* eslint-disable react/prop-types */
import { MapPinIcon } from '@heroicons/react/24/solid'
import Section from './Section'

export default function Bio() {
  return (
    <Section leftText text="Hello world">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="aspect-video md:aspect-auto md:col-span-1 lg:col-span-1 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src="/images/me.jpg"
            alt="Chris Bui"
          />
        </div>
        <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-4 md:gap-6 p-4 md:p-8 bg-zinc-900 rounded-md border border-zinc-800 mx-auto">
          <div className="flex gap-4 items-center flex-wrap">
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
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6">
            <Location />
            <AvailableForWork />
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Location() {
  return (
    <div className="flex items-center gap-2 text-zinc-400 text-base md:text-lg">
      <span>
        <MapPinIcon className="text-orange-500" width={20} />
      </span>
      <span>Hanoi, Vietnam</span>
    </div>
  )
}

export function AvailableForWork() {
  return (
    <div className="flex items-center gap-2 text-zinc-400 text-base md:text-lg">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-700"></span>
      </span>
      <span>Available for work</span>
    </div>
  )
}
