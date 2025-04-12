import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import LinkBank from './pages/LinkBank'
import Help from "./pages/Help";


function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/signin" replace />} />
      <Route path="/linkbank" element={<LinkBank />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  )
}

export default App
