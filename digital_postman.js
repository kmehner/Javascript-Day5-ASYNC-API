async function postData(url = '', data = {}) {
  const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  return await response.json();
}

// Example: Sending user data to a server
const userData = { username: 'john_doe', email: 'john@example.com' };
const serverResponse = await postData('<https://api.example.com/users>', userData);
console.log(serverResponse);