
const Heading = ({textAlign, children}) => {
  return (
    <h2 className={`Heading text-[#000929] ${textAlign}`}>{children}</h2>
  )
}

export default Heading