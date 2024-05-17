/* eslint-disable react/prop-types */
const Section = ({ children, leftText, text }) => {
  return (
    <section
      className={`relative border-2 border-dashed rounded-md border-blue-700 p-4 md:p-8 lg:p-12`}>
      <p
        className={`bg-blue-700 text-blue-50 p-2 md:px-4 inline-block ${
          leftText ? 'left-8' : 'right-8'
        } bottom-full rounded-t-md absolute font-medium tracking-widest`}>
        {text || 'default text'}
      </p>
      {children}
    </section>
  )
}

export default Section
