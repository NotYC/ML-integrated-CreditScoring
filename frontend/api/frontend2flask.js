const flaskS = import.meta.env.VITE_FLASK_SERVER;
const flaskP = import.meta.env.VITE_FLASK_PORT;

export async function sendDataToBackend(formData) {
  // Prepare the payload by removing dummy fields (if necessary)
  const { name, work_experience, ...payload } = formData;

  // Print the data received in the console
  console.log('Data sent to flask:', payload);

  try {
    const res = await fetch(`http://${flaskS}:${flaskP}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      // Parse the error response
      const errorData = await res.json();
      console.error('Error response from backend:', errorData);
      // Throw an error with the response data to be caught in the catch block
      throw { response: { data: errorData } };
    }

    // If response is ok, parse and return the result
    const result = await res.json();
    console.log('Response from backend:', result);
    return result;
  } catch (err) {
    console.error('Error calling backend:', err);
    
    // If we have a structured error response, extract it
    if (err.response && err.response.data) {
      throw err; // Re-throw to be handled by the component
    }
    
    // For network errors or other unexpected errors
    throw new Error("Network error or backend is not responding");
  }
}