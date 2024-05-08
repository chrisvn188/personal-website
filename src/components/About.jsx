import UnderConstruction from './UnderConstruction'

/* eslint-disable react/prop-types */
export default function About() {
  return (
    <section className="flex flex-col gap-8" id="about">
      <h2 className="text-2xl font-bold font-[Inter] capitalize">
        A little bit about me
      </h2>
      <UnderConstruction feature="about" />
    </section>
  )
}
