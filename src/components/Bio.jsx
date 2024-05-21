/* eslint-disable react/prop-types */
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Button } from '@headlessui/react'

export default function Bio() {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="hidden md:block md:aspect-auto md:col-span-1 lg:col-span-1 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src="/images/bio/me.jpg"
            alt="Chris Bui"
          />
        </div>

        <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-4 md:gap-6 p-4 md:p-8 bg-zinc-900 rounded-md border border-zinc-800 mx-auto">
          <div className="flex gap-4 items-center flex-wrap">
            <div className="aspect-square w-16 h-16 rounded-full overflow-hidden md:hidden">
              <img
                className="h-full w-full object-cover object-top"
                src="/images/bio/me.jpg"
                alt="Chris Bui"
              />
            </div>

            <h1 className="text-3xl md:text-4xl tracking-tight text-zinc-50 font-bold text-balance">
              Frontend Engineer
            </h1>
          </div>

          <p>
            Hello 👋🏻, I&apos;m Chris Bui. I love the process of turning abstract
            ideas into practical, real-world applications through the power of
            programming.
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6">
            <Location />
            <AvailableForWork />
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button className="rounded-md bg-brand py-3 px-4 font-medium text-sm sm:text-base text-zinc-50 data-[hover]:bg-brand/80 data-[active]:bg-brand transition-colors">
              View my work
            </Button>
            <Button className="rounded-md bg-gray-700 py-3 px-4 font-medium text-sm sm:text-base text-zinc-50">
              Let&apos;s talk
            </Button>
            <div className="hidden sm:flex gap-4">
              <a className="group" href="" aria-label="github">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                  />
                </svg>
              </a>

              <a className="group" href="" aria-label="linkedin">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300">
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Location() {
  return (
    <div className="flex items-center gap-2 text-zinc-400 text-base md:text-lg">
      <span>
        <MapPinIcon className="text-orange-400" width={20} />
      </span>
      <span>Hanoi, Vietnam</span>
    </div>
  )
}

export function AvailableForWork() {
  return (
    <div className="flex items-center gap-2 text-zinc-400 text-base md:text-lg">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span>Available for work</span>
    </div>
  )
}
