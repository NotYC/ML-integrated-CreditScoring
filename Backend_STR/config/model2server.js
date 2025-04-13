export async function sendDataToBackend(formData) {
  // Prepare the payload by removing dummy fields (if necessary)
  const { name, work_experience, ...payload } = formData; // Adjust as needed for your form data

  // Print the data received in the console
  console.log('Data sent to flask:', payload);

  try {
    const res = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    // Print the response data
    const result = await res.json();
    console.log('Response from backend:', result);

    return result;
  } catch (err) {
    console.error('Error calling backend:', err);
    return { score: null, rating: "Error fetching score" };
  }
}
