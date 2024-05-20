/* eslint-disable react/prop-types */
const FancyStrong = ({ children }) => {
  return (
    <strong className="text-white font-bold bg-gradient-to-r from-blue-400 to-pink-400 rounded-md bg-clip-text text-transparent">
      {children}
    </strong>
  )
}

export default FancyStrong
