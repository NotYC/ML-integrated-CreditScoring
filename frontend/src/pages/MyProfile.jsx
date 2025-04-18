// src/pages/MyProfile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const MyProfile = () => {
  const navigate = useNavigate();
  const email = Cookies.get('email'); // Get email from cookies

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    profilePhoto: '', // URL or base64 string
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null);
  const [password, setPassword] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`http://localhost:5000/userdata?email=${email}`);
        const data = await res.json();
        if (data.success) {
          setProfile(data.user);
        } else {
          setError('Failed to fetch profile');
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching profile');
      }
    };

    if (email) {
      fetchProfile();
    } else {
      setError('No email found in cookies');
    }
  }, [email]);

  const handleChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPhoto(file);
      setProfile((prev) => ({ ...prev, profilePhoto: URL.createObjectURL(file) }));
    }
  };

  const getInitials = () => {
    return (profile.firstName?.[0] || '') + (profile.lastName?.[0] || '');
  };

  const handleSaveChanges = () => {
    setShowPasswordPrompt(true);
  };

  const handlePasswordConfirm = async () => {
    try {
      const formData = new FormData();
      formData.append('email', profile.email);
      formData.append('password', password);
      formData.append('firstName', profile.firstName);
      formData.append('lastName', profile.lastName);
      formData.append('phone', profile.phone);
      formData.append('address', profile.address);
      if (newPhoto) formData.append('profilePhoto', newPhoto);

      const res = await fetch('http://localhost:5000/updateProfile', {
        method: 'PUT',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setMessage('Profile updated successfully!');
        setError('');
        setShowPasswordPrompt(false);
        setEditMode(false);
      } else {
        setError(data.message || 'Failed to update profile');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 text-black">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>

        <div className="flex items-center space-x-4 mb-6">
          {profile.profilePhoto ? (
            <img
              src={profile.profilePhoto}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
              {getInitials()}
            </div>
          )}

          {editMode && (
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="text-sm"
            />
          )}
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              name="email"
              value={profile.email}
              disabled
              className="w-full p-3 border border-gray-300 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              name="address"
              value={profile.address}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          {editMode ? (
            <button
              type="button"
              onClick={handleSaveChanges}
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
            >
              Save Changes
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setEditMode(true)}
              className="w-full bg-gray-600 text-white py-3 rounded hover:bg-gray-700 transition duration-300"
            >
              Edit Profile
            </button>
          )}
        </form>

        {showPasswordPrompt && (
          <div className="mt-6 bg-gray-100 p-4 rounded">
            <label className="block text-gray-700 mb-2">Enter Password to Confirm Changes</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-3"
            />
            <button
              onClick={handlePasswordConfirm}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Confirm and Save
            </button>
          </div>
        )}

        {message && <p className="mt-4 text-green-600">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}

        <button
          className="mt-6 text-blue-600 hover:underline"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MyProfile;