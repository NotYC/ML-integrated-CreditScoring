export async function sendDataToBackend(formData) {
  const { name, work_experience, ...payload } = formData; // remove dummy fields

  try {
    const res = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    return result;
  } catch (err) {
    console.error('Error calling backend:', err);
    return { score: null, rating: "Error fetching score" };
  }
}
