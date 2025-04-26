// const flaskS = import.meta.env.VITE_FLASK_SERVER;
// const flaskP = import.meta.env.VITE_FLASK_PORT;

// export async function sendDataToBackend(formData) {
//   // Prepare the payload by removing dummy fields (if necessary)
//   const { name, work_experience, ...payload } = formData; // Adjust as needed for your form data

//   // Print the data received in the console
//   console.log('Data sent to flask:', payload);

//   try {
//     const res = await fetch(`http://${flaskS}:${flaskP}/predict`, {         //To host it on another workstation just replace the ip with local host
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload)
//     });

//     // Print the response data
//     const result = await res.json();
//     console.log('Response from backend:', result);

//     return result;
//   } catch (err) {
//     console.error('Error calling backend:', err);
//     return { score: null, rating: "Error fetching score" };
//   }
// }

const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const flaskHost = isLocalhost
  ? 'localhost' // Used when accessing frontend from host browser
  : import.meta.env.VITE_FLASK_SERVER; // Used when frontend is in Docker

const flaskPort = import.meta.env.VITE_FLASK_PORT;

export async function sendDataToBackend(formData) {
  const { name, work_experience, ...payload } = formData;

  console.log('Data sent to flask:', payload);

  try {
    const res = await fetch(`http://${flaskHost}:${flaskPort}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Error response from backend:', errorData);
      throw { response: { data: errorData } };
    }

    const result = await res.json();
    console.log('Response from backend:', result);

    return result;
  } catch (err) {
    console.error('Error calling backend:', err);

    if (err.response && err.response.data) {
      throw err; // Re-throw to be handled by the component
    }

    throw new Error("Network error or backend is not responding");
  }
}


