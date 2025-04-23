// frontend/src/api/credithistory.js
const backS = import.meta.env.VITE_BACKEND_SERVER;
const backP = import.meta.env.VITE_BACK_PORT;

export async function sendLogtoBackend(payload,score,rating,logEmail) {
    try {
        
      const dataLog = { ...payload, score, rating,logEmail };
      console.log('Data sent to backend:', dataLog);  
      const res = await fetch(`http://${backS}:${backP}/logHandler`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataLog)
      });
      const result = await res.json();
      return result;
    } catch (err) {
      console.error('Error sending Logs:', err);
      return { success: false, message: 'Could not reach backend' };
    }
  }
  
  // this will send data collected by the SignUp page to the backend
  // for further processing