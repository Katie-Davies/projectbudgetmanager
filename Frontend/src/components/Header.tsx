import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="flex justify-start bg-customBlue h-16 content-center flex-wrap">
      <Link
        className="text-white font-bold text-2xl ml-5"
        to=".."
        relative="path"
      >
        • • •
      </Link>
    </div>
  )
}

export default Header
