import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    dob: '',
    uid: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up data:', formData);
  };

  return (
    <div className="min-h-screen w-full bg-white text-black px-4 py-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-600 mb-6">Please enter your details</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input name="firstName" placeholder="Enter your first name" onChange={handleChange} required className="flex-1 border p-2 rounded" />
              <input name="lastName" placeholder="Enter your last name" onChange={handleChange} required className="flex-1 border p-2 rounded" />
            </div>

            <input name="address" placeholder="Enter your specific address" onChange={handleChange} required className="w-full border p-2 rounded" />
            <input name="city" placeholder="Enter your city" onChange={handleChange} required className="w-full border p-2 rounded" />

            <div className="flex gap-4">
              <input name="state" placeholder="Example: DL" onChange={handleChange} required className="flex-1 border p-2 rounded" />
              <input name="postalCode" placeholder="Example: 110019" onChange={handleChange} required className="flex-1 border p-2 rounded" />
            </div>

            <div className="flex gap-4">
              <input name="dob" type="date" placeholder="YYYY-MM-DD" onChange={handleChange} required className="flex-1 border p-2 rounded" />
              <input name="uid" placeholder="Example: 110019" onChange={handleChange} required className="flex-1 border p-2 rounded" />
            </div>

            <input name="email" type="email" placeholder="Enter your email" onChange={handleChange} required className="w-full border p-2 rounded" />
            <input name="password" type="password" placeholder="Enter your password" onChange={handleChange} required className="w-full border p-2 rounded" />

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300">
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-500 hover:text-blue-400">
              Sign in
            </Link>
          </p>
        </div>

        <div className="hidden md:block md:w-1/2 bg-blue-50 p-6">
          {/* You can add a mockup or branding here or leave this blank */}
          <img src="/assets/signup-preview.png" alt="Preview" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
