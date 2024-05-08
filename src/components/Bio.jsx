/* eslint-disable react/prop-types */
import { CheckCircleIcon, MapPinIcon } from '@heroicons/react/24/solid'
import NormalText from './NormalText'

export default function Bio() {
  return (
    <section className="flex flex-col gap-4 md:gap-6">
      <div className="flex gap-4 items-center flex-wrap">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            className="block w-full h-full object-cover object-top"
            src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0fGVufDB8MXwwfHx8MA%3D%3D"
            alt="Chris Bui"
          />
        </div>
        <hgroup className="flex flex-col gap-2">
          <h1 className="font-[Inter] font-black text-3xl tracking-wider text-green-500 md:text-4xl">
            Chris Bui
          </h1>
          <p>
            <NormalText>Software Engineer</NormalText>
          </p>
        </hgroup>
      </div>
      <p>
        <NormalText>
          I <StyledStrongText>design</StyledStrongText> and{' '}
          <StyledStrongText>build</StyledStrongText> responsive websites and web
          applications which run fast and user-friendly. Check out my latest
          projects below and let&apos;s build awesome things together.
        </NormalText>
      </p>
      <div className="flex flex-wrap gap-4 md:gap-8">
        <Location />
        <AvailableForWork />
      </div>
    </section>
  )
}

export function Location() {
  return (
    <div className="flex items-center gap-2">
      <span>
        <MapPinIcon className="text-orange-500" width={20} />
      </span>
      <NormalText>Hanoi, Vietnam</NormalText>
    </div>
  )
}

export function AvailableForWork() {
  return (
    <div className="flex items-center gap-2">
      <span>
        <CheckCircleIcon className="text-green-500" width={20} />
      </span>
      <NormalText>Available for work</NormalText>
    </div>
  )
}

export function StyledStrongText({ children }) {
  return <strong className="font-bold text-orange-400">{children}</strong>
}