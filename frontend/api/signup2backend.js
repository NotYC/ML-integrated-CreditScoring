// frontend/src/api/sendDataToBackend.js
const backS = import.meta.env.VITE_BACKEND_SERVER;
const backP = import.meta.env.VITE_BACK_PORT;

export async function sendDataToBackend(formData) {
  try {
    console.log(JSON.stringify(formData))
    const res = await fetch(`http://${backS}:${backP}/signup`, {
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