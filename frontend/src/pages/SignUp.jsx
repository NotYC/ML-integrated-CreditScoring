// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function SignUp() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     dob: '',
//     uid: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Sign up data:', formData);
//   };

//   return (
//     <div className="min-h-screen w-full bg-white text-black px-4 py-8">
//       <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="w-full md:w-1/2 p-8">
//           <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
//           <p className="text-gray-600 mb-6">Please enter your details</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex gap-4">
//               <input name="firstName" placeholder="Enter your first name" onChange={handleChange} required className="flex-1 border p-2 rounded" />
//               <input name="lastName" placeholder="Enter your last name" onChange={handleChange} required className="flex-1 border p-2 rounded" />
//             </div>

//             <input name="address" placeholder="Enter your specific address" onChange={handleChange} required className="w-full border p-2 rounded" />
//             <input name="city" placeholder="Enter your city" onChange={handleChange} required className="w-full border p-2 rounded" />

//             <div className="flex gap-4">
//               <input name="state" placeholder="Example: DL" onChange={handleChange} required className="flex-1 border p-2 rounded" />
//               <input name="postalCode" placeholder="Example: 110019" onChange={handleChange} required className="flex-1 border p-2 rounded" />
//             </div>

//             <div className="flex gap-4">
//               <input name="dob" type="date" placeholder="YYYY-MM-DD" onChange={handleChange} required className="flex-1 border p-2 rounded" />
//               <input name="uid" placeholder="Example: 110019" onChange={handleChange} required className="flex-1 border p-2 rounded" />
//             </div>

//             <input name="email" type="email" placeholder="Enter your email" onChange={handleChange} required className="w-full border p-2 rounded" />
//             <input name="password" type="password" placeholder="Enter your password" onChange={handleChange} required className="w-full border p-2 rounded" />

//             <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300">
//               Sign Up
//             </button>
//           </form>

//           <p className="mt-4 text-gray-600">
//             Already have an account?{' '}
//             <Link to="/signin" className="text-blue-500 hover:text-blue-400">
//               Sign in
//             </Link>
//           </p>
//         </div>

//         <div className="hidden md:block md:w-1/2 bg-blue-50 p-6">
//           {/* You can add a mockup or branding here or leave this blank */}
//           <img src="/assets/signup-preview.png" alt="Preview" className="rounded-lg shadow-md" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;


// export default function SignUp() {
//   return (
//     <div className="flex h-screen w-screen">
//       {/* Left half - Centered Sign Up Form */}
//       <div className="w-1/2 flex items-center justify-center bg-white text-black">
//         <div className="w-full max-w-md px-8">
//           {/* Centered heading */}
//           <div className="text-center mb-6">
//             <h2 className="text-4xl font-bold mb-2">Sign Up</h2>
//             <p className="text-gray-700">Create your account to get started</p>
//           </div>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input className="input-style" type="text" placeholder="First name" />
//             <input className="input-style" type="text" placeholder="Last name" />
//           </div>
//           <input className="input-style mb-4" type="text" placeholder="Address" />
//           <input className="input-style mb-4" type="text" placeholder="City" />

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input className="input-style" type="text" placeholder="State (e.g., DL)" />
//             <input className="input-style" type="text" placeholder="Postal code" />
//           </div>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input className="input-style" type="date" />
//             <input className="input-style" type="text" placeholder="Unique ID" />
//           </div>

//           <input className="input-style mb-4" type="email" placeholder="Email" />
//           <input className="input-style mb-6" type="password" placeholder="Password" />

//           {/* Blue Sign Up button */}
//           <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-md transition duration-200">
//           Sign Up
//           </button>


//           <p className="text-sm text-gray-700 mt-4 text-center">
//             Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a>
//           </p>
//         </div>
//       </div>

//       {/* Right half - Image or Visual */}
//       <div className="w-1/2 bg-gray-100 flex items-center justify-center">
//         <p className="text-gray-600">Sign up preview</p>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../assets/dashboard.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { sendSignupData } from "../../../Backend_STR/Authentication/sendSignupData.js";

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



  const handleSignup = async () => {
    const { password, ...rest } = formData;
    const payload = { ...rest, password };

    console.log("Sending signup payload:", payload);

    const result = await sendSignupData(payload);

    if (result?.message === 'User created') {
      alert('Signup successful!');
    } else {
      alert('Signup failed!');
      console.error(result.error || result.message);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Sign up data:', formData);
  await handleSignup(); // call your signup function here
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