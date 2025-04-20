import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dashboard from '../assets/dashboard.png';
import Cookies from 'js-cookie';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // for redirection
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // reset error

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message);
      } else {
        // Store user details in cookies
        //Cookies.set('email', data.user.email);
        //Cookies.set('firstname', data.user.firstname);
        //Cookies.set('lastname', data.user.lastname);

        alert('Login successful!');
        navigate('/home'); // navigate to dashboard
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen h-screen flex bg-white overflow-hidden">
      {/* Left side: Sign In Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-black text-left mb-3">Sign In</h1>
          <p className="text-gray-500 text-left mb-8">Please enter your details</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="mb-4 text-red-600 text-sm font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 mt-4 mb-6"
            >
              Sign In
            </button>
          </form>

          <div className="text-left">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side: Optional design/image */}
      <div className="hidden md:block md:w-1/2 h-screen">
        <div className="h-full w-full border-t-2 border-b-2 border-l-2 border-black">
          <img src={dashboard} alt="Dashboard preview" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;