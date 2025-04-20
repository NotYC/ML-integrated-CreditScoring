// frontend/src/api/sendDataToBackend.js

export async function sendDataToBackend(formData) {
  try {
    console.log(JSON.stringify(formData))
    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    return result;
  } catch (err) {
    console.error('Error sending data:', err);
    return { success: false, message: 'Could not reach backend' };
  }
}

// this will send data collected by the SignUp page to the backend
// for further processing