import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <div className="flex justify-start bg-customBlue h-16 content-center flex-wrap">
      {location.pathname !== '/' ? (
        <Link
          className="text-white font-bold text-2xl ml-5"
          to=".."
          relative="path"
        >
          • • •
        </Link>
      ) : null}
    </div>
  )
}

export default Header
