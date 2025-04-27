import { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../assets/dashboard.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { sendDataToBackend } from '../../api/signup2backend.js';
const backS = import.meta.env.VITE_BACKEND_SERVER;
const backP = import.meta.env.VITE_BACK_PORT;


function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    dob: null,
    uid: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });
  };





  const handleSubmit = async (e) => {
    e.preventDefault();

  // Format the data (e.g., convert dob to string)
    const payload = {
      ...formData,
      dob: formData.dob ? formData.dob.toISOString().split('T')[0] : null // format DOB as yyyy-mm-dd
    };

    console.log("📦 Sending signup data to backend:", payload);

    const result = await sendDataToBackend(payload);

    if (result.success) {
      alert("✅ Signup successful! Please check your email to verify.");
    } else {
      alert("Signup failed: " + result.message);
    }
  };


  return (
    <div className="min-h-screen w-full flex">
      {/* Left side with form */}
      <div className="w-full md:w-1/2 bg-white text-black flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                name="firstName"
                placeholder="Enter your first name"
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 p-2 rounded"
              />
              <input
                name="lastName"
                placeholder="Enter your last name"
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 p-2 rounded"
              />
            </div>

            <input
              name="address"
              placeholder="Enter your specific address"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              name="city"
              placeholder="Enter your city"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />

            <div className="flex gap-4">
              <input
                name="state"
                placeholder="State"
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 p-2 rounded"
              />
              <input
                name="postalCode"
                placeholder="Pin Code"
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <DatePicker
                  selected={formData.dob}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select your date of birth"
                  className="w-full border border-gray-300 p-2 rounded"
                  showYearDropdown
                  showMonthDropdown
                  dropdownMode="select"
                  maxDate={new Date()}
                />
              </div>
              <input
                name="uid"
                placeholder="Enter UID"
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 p-2 rounded"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-500 hover:text-blue-400">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right side with image */}
      <div className="hidden md:block md:w-1/2 h-screen">
        <div className="h-full w-full border-t-2 border-b-2 border-l-2 border-black">
          <img src={dashboard} alt="Dashboard preview" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;