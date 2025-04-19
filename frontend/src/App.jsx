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
import TransactionHistory from './pages/TransactionHistory'
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import MyProfile from "./pages/MyProfile"
import MyBank from './pages/MyBanks'
import CreditHistory from './pages/CreditHistory';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/linkbank" element={<LinkBank />} />
      
      {/* Routes for sidebar (wrapped in MainLayout) */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mybank" element={<MyBank />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/credit-history" element={<CreditHistory />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        
      </Route>
      
      {/* Catch all */}
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  )
}

export default App
// This code is a React component that sets up the routing for a web application using React Router. It defines routes for signing in, signing up, linking a bank, and various pages within the app, including a dashboard, help page, home page, about us page, transaction history, and user profile. The sidebar navigation is handled by wrapping certain routes in a `MainLayout` component. The app redirects to the sign-in page for any undefined routes.