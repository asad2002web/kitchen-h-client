import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
      <h1> <span className="text-4xl text-[#df2929]">404</span> - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p className='mb-10'>Please check the URL and try again.</p>
      <Link className="ButtonBorder px-8 py-2 mt-10" to="/">Go back to the homepage</Link>
      </div>
    </div>
  )
}

export default ErrorPage