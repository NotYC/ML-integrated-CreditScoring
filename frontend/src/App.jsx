import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './components/SignIn'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      {/* Add your other routes here */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
      
      {/* Redirect to signin by default */}
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  )
}

export default App