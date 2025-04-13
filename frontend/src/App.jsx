// import { Routes, Route, Navigate } from 'react-router-dom'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
// import Dashboard from './pages/Dashboard'
// import LinkBank from './pages/LinkBank'
// import Help from "./pages/Help";
// import MainLayout from './layout/MainLayout';
// import Home from "./pages/Home"



// function App() {
//   return (
//     <Routes>
       
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
      
//       <Route path="*" element={<Navigate to="/signin" replace />} />
//       <Route path="/linkbank" element={<LinkBank />} />
      


//       {/* routes for sidebar such that it remains constant */}
//       <Route element={<MainLayout />}>    
//        <Route path="/dashboard" element={<Dashboard />} />
//        <Route path="/help" element={<Help />} />
//        <Route path="/Home" element={<Home/>} />
//       </Route>

//     </Routes>
//   )
// }

// export default App


import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import LinkBank from './pages/LinkBank'
import Help from "./pages/Help"
import MainLayout from './layout/MainLayout'
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"  // Import the new AboutUs component

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/linkbank" element={<LinkBank />} />
      
      {/* Routes for sidebar such that it remains constant */}
      <Route element={<MainLayout />}>    
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />  {/* Added AboutUs route */}
        <Route path="/my-banks" element={<Navigate to="/dashboard" replace />} />  {/* Redirect to dashboard for now */}
        <Route path="/transaction-history" element={<Navigate to="/dashboard" replace />} />  {/* Redirect to dashboard for now */}
        
        {/* Redirect /dashboard to /home if you want Home as the default */}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Route>
      
      {/* Catch all for undefined routes */}
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  )
}

export default App