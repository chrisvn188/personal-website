/* eslint-disable react/prop-types */
import { Button } from '@headlessui/react'

const Hero = () => {
  return (
    <section className="p-4 bg-zinc-900 text-zinc-50 rounded-md ring-1 ring-zinc-800">
      <div className="space-y-8 md:space-y-0 md:flex gap-8">
        <div className="p-2 bg-zinc-800 inline-block rounded-full sm:p-0 sm:bg-transparent sm:w-full -mb-6 sm:-mb-0">
          <img
            className="aspect-square rounded-full w-32 sm:aspect-video sm:rounded-md sm:w-full object-cover object-top md:aspect-auto"
            src="/images/hero/me.jpg"
            alt="Chris Bui"
          />
        </div>
        <div>
          <h1 className="text-clamp-lg text-zinc-50 font-bold text-balance">
            Frontend web developer
          </h1>
          <p className="paragraph mt-4 mb-8">
            Hello 👋🏻, I&apos;m Chris Bui. I love the process of turning abstract
            ideas into practical, real-world applications through the power of
            programming.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button className="btn btn-primary">View my work</Button>
            <Button className="btn btn-secondary">Let&apos;s talk</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
