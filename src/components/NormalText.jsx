/* eslint-disable react/prop-types */
export default function NormalText({ textTransform, children }) {
  return <span className={`md:text-lg ${textTransform}`}>{children}</span>
}
