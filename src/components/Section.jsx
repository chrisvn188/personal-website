/* eslint-disable react/prop-types */
const Section = ({ children, leftText, text }) => {
  return (
    <section
      className={`relative border-2 border-dashed rounded-md border-brand p-4 md:p-8`}>
      <h2
        className={`bg-brand text-white p-2 md:px-4 inline-block ${
          leftText ? 'left-8' : 'right-8'
        } bottom-full rounded-t-md absolute font-bold tracking-wide text-2xl`}>
        {text || 'default text'}
      </h2>
      {children}
    </section>
  )
}

export default Section
