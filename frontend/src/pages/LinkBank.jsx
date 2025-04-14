// import React, { useEffect, useRef, useState } from 'react'
// import './LinkBank.css'
// import dashboard from '../assets/dashboard.png';



// const banks = [
//   { name: 'SBI', logo: 
// <img src="/assets/sbi.png" alt="SBI" /> },
//   { name: 'HDFC', logo: '/assets/hdfc.jpg' },
//   { name: 'PNB', logo: '/assets/pnb.png' },
//   { name: 'ICICI', logo: '/assets/icici.png' },
//   { name: 'Canara', logo: '/assets/canara.png' },
//   { name: 'Agni', logo: '/assets/agni.png' }
// ]

// const LinkBank = () => {
//   const [showModal, setShowModal] = useState(false)
//   const modalRef = useRef()

//   // Close modal on Escape key
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') {
//         setShowModal(false)
//       }
//     }
//     document.addEventListener('keydown', handleKeyDown)
//     return () => document.removeEventListener('keydown', handleKeyDown)
//   }, [])

//   // Close modal when clicking outside the modal box
//   const handleClickOutside = (e) => {
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       setShowModal(false)
//     }
//   }

//   return (
//     <div className="linkbank-wrapper">
//       <div className="left-section">
//         <h1>Link Account</h1>
//         <p>Link your account to get started</p>
//         <button onClick={() => setShowModal(true)}>Connect Bank</button>
//       </div>

//       <div className="hidden md:block md:w-1/2 h-screen">
//         <div className="h-full w-full border-t-2 border-b-2 border-l-2 border-black">
//           <img src={dashboard} alt="Dashboard preview" className="w-full h-full object-cover"/>
//         </div>
//       </div>

//       {showModal && (
//         <div className="modal-backdrop" onClick={handleClickOutside}>
//           <div className="modal-box" ref={modalRef}>
//             <b><h2>Select your Bank</h2></b>
//             <div className="bank-list">
//               {banks.map((bank, index) => (
//                 <div key={index} className="bank-card">
//                   <img src={bank.logo} alt={bank.name} />
//                   <span>{bank.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default LinkBank


// import React, { useEffect, useRef, useState } from 'react'
// import './LinkBank.css'
// import dashboard from '../assets/dashboard.png';

// const LinkBank = () => {
//   const [showModal, setShowModal] = useState(false)
//   const modalRef = useRef()

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') setShowModal(false)
//     }
//     document.addEventListener('keydown', handleKeyDown)
//     return () => document.removeEventListener('keydown', handleKeyDown)
//   }, [])

//   const handleClickOutside = (e) => {
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       setShowModal(false)
//     }
//   }

//   return (
//     <div className="linkbank-wrapper">
//       <div className="left-section">
//         <h1>Link Account</h1>
//         <p>Fill in your bank details to continue</p>
//         <button onClick={() => setShowModal(true)}>Connect Bank</button>
//       </div>

//       <div className="hidden md:block md:w-1/2 h-screen">
//         <div className="h-full w-full border-t-2 border-b-2 border-l-2 border-black">
//           <img src={dashboard} alt="Dashboard preview" className="w-full h-full object-cover" />
//         </div>
//       </div>

//       {showModal && (
//         <div className="modal-backdrop" onClick={handleClickOutside}>
//           <div className="modal-box" ref={modalRef}>
//             <h2><b>Enter Bank Account Details</b></h2>
//             <form className="form-grid">
//               <input type="text" placeholder="Name" required />
//               <input type="email" placeholder="Email" required />
//               <input type="tel" placeholder="Phone" required />
//               <input type="text" placeholder="Address" required />
//               <select required>
//                 <option value="">Select Bank</option>
//                 <option>SBI</option>
//                 <option>HDFC</option>
//                 <option>PNB</option>
//                 <option>ICICI</option>
//                 <option>Canara</option>
//                 <option>Agni</option>
//               </select>
//               <input type="text" placeholder="Branch" required />
//               <input type="text" placeholder="IFSC" required />
//               <input type="text" placeholder="Account Number" required />
//               <input type="text" placeholder="Account Type (Savings/Current)" required />
//               <input type="text" placeholder="PAN Number" required />
//               <input type="text" placeholder="Aadhaar Number (Optional)" />
//               <input type="date" placeholder="Date of Birth" required />
//               <select required>
//                 <option value="">Gender</option>
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Other</option>
//               </select>
//               <input type="text" placeholder="Nominee Name" />
//               <input type="text" placeholder="Nominee Relationship" />
//               <input type="text" placeholder="Occupation" required />
//               <input type="text" placeholder="Annual Income" required />
//               <input type="text" placeholder="Nationality" required />
//               <input type="text" placeholder="TIN or Passport Number" required />
//               <label>Upload ID Proof<input type="file" accept="image/*,.pdf" /></label>
//               <label>Upload Address Proof<input type="file" accept="image/*,.pdf" /></label>
//               <label>Upload Photo<input type="file" accept="image/*" /></label>
//               <label className="consent-box">
//                 <input type="checkbox" required />
//                 I agree to the terms & authorize access
//               </label>
//               <button type="submit" className="submit-btn">Submit</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default LinkBank


// when user enters details, redirected to homepage
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LinkBank.css';
import dashboard from '../assets/dashboard.png';

const LinkBank = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Validate form data or show success message
    navigate('/home'); // Redirect to home page
  };

  return (
    <div className="linkbank-wrapper">
      <div className="left-section">
        <h1>Link Account</h1>
        <p>Fill in your bank details to continue</p>
        <button onClick={() => setShowModal(true)}>Connect Bank</button>
      </div>

      <div className="hidden md:block md:w-1/2 h-screen">
        <div className="h-full w-full border-t-2 border-b-2 border-l-2 border-black">
          <img src={dashboard} alt="Dashboard preview" className="w-full h-full object-cover" />
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={handleClickOutside}>
          <div className="modal-box" ref={modalRef}>
            <h2><b>Enter Bank Account Details</b></h2>
            <form className="form-grid" onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <input type="text" placeholder="Address" required />
              <select required>
                <option value="">Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>PNB</option>
                <option>ICICI</option>
                <option>Canara</option>
                <option>Agni</option>
              </select>
              <input type="text" placeholder="Branch" required />
              <input type="text" placeholder="IFSC" required />
              <input type="text" placeholder="Account Number" required />
              <input type="text" placeholder="Account Type (Savings/Current)" required />
              <input type="text" placeholder="PAN Number" required />
              <input type="text" placeholder="Aadhaar Number (Optional)" />
              <input type="date" placeholder="Date of Birth" required />
              <select required>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input type="text" placeholder="Nominee Name" />
              <input type="text" placeholder="Nominee Relationship" />
              <input type="text" placeholder="Occupation" required />
              <input type="text" placeholder="Annual Income" required />
              <input type="text" placeholder="Nationality" required />
              <input type="text" placeholder="TIN or Passport Number" required />
              <label>Upload ID Proof<input type="file" accept="image/*,.pdf" /></label>
              <label>Upload Address Proof<input type="file" accept="image/*,.pdf" /></label>
              <label>Upload Photo<input type="file" accept="image/*" /></label>
              <label className="consent-box">
                <input type="checkbox" required />
                I agree to the terms & authorize access
              </label>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkBank;
