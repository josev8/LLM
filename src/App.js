import React, { useState } from 'react';

function App() {
  const [inputMessage, setInputMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inpMessage: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponseMessage(data.msg);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={inputMessage}
        onChange={handleInputChange}
        placeholder="Enter your message"
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
      {responseMessage && (
        <div>
          <h2>Response:</h2>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
