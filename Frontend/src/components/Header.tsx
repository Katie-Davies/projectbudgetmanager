import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="flex justify-center bg-customBlue h-16 content-center flex-wrap">
      <Link className="text-white font-bold text-2xl" to=".." relative="path">
        Project Manager
      </Link>
    </div>
  )
}

export default Header
