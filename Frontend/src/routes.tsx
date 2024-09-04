import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './pages/App'

export default createRoutesFromElements(
  <Route path="/" element={<App />}></Route>
)
