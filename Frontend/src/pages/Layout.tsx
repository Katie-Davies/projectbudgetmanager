import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout() {
  return (
    <div>
      <Header />
      <h1>Layout</h1>

      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
