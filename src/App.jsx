import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Subscriptions from './pages/Subscriptions'
import RoutesPage from './pages/RoutesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="routes" element={<RoutesPage />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
