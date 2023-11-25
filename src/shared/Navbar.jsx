import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <ul className="flex gap-x-3 p-3 bg-[#f01543] text-white">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/loading'>Loading Test</Link>
        </ul>
    </div>
  )
}

export default Navbar