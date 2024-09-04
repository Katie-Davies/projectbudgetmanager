import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './pages/App'
import CreateProject from './pages/CreateProject'
import LogPage from './pages/LogPage'
import Layout from './pages/Layout'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="/log" element={<LogPage />} />
    <Route path="/createproject" element={<CreateProject />} />
  </Route>
)
