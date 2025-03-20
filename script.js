async function getGrokResponse() {
  const prompt = document.getElementById('prompt').value;
  const responseDiv = document.getElementById('response');
  responseDiv.innerHTML = 'Loading...';

  try {
    const response = await fetch('https://avaqore-backend.vercel.app/api/grok', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt })
    });
    const data = await response.json();
    if (data.success) {
      responseDiv.innerHTML = data.response || data.message; // Handles both server versions
    } else {
      responseDiv.innerHTML = 'Error: ' + data.error;
    }
  } catch (error) {
    responseDiv.innerHTML = 'Error: ' + error.message;
  }
}