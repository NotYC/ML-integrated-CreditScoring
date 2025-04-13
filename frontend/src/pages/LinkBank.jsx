import React, { useEffect, useRef, useState } from 'react'
import './LinkBank.css'
import dashboard from '../assets/dashboard.png';



const banks = [
  { name: 'SBI', logo: 
<img src="/assets/sbi.png" alt="SBI" /> },
  { name: 'HDFC', logo: '/assets/hdfc.jpg' },
  { name: 'PNB', logo: '/assets/pnb.png' },
  { name: 'ICICI', logo: '/assets/icici.png' },
  { name: 'Canara', logo: '/assets/canara.png' },
  { name: 'Agni', logo: '/assets/agni.png' }
]

const LinkBank = () => {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef()

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close modal when clicking outside the modal box
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false)
    }
  }

  return (
    <div className="linkbank-wrapper">
      <div className="left-section">
        <h1>Link Account</h1>
        <p>Link your account to get started</p>
        <button onClick={() => setShowModal(true)}>Connect Bank</button>
      </div>

      <div className="hidden md:block md:w-1/2 h-screen">
        <div className="h-full w-full border-t-2 border-b-2 border-l-2 border-black">
          <img src={dashboard} alt="Dashboard preview" className="w-full h-full object-cover"/>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={handleClickOutside}>
          <div className="modal-box" ref={modalRef}>
            <b><h2>Select your Bank</h2></b>
            <div className="bank-list">
              {banks.map((bank, index) => (
                <div key={index} className="bank-card">
                  <img src={bank.logo} alt={bank.name} />
                  <span>{bank.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LinkBank
