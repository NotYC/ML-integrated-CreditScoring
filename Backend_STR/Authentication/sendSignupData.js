export const sendSignupData = async (payload) => {
  try {
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return await response.json();
  } catch (error) {
    console.error('Error sending signup data:', error);
    return { message: 'Error', error };
  }
};