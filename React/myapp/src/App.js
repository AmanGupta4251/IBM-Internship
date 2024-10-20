import React, { useState } from 'react';
import GreetingMessage from './GreetingMessage';

function App() {
  const [name, setName] = useState("Your Name");
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleButtonClick = () => {
    setName(newName);
    setNewName("");
  };

  return (
    <div>
      <h1>Welcome to My Greeting App</h1>
      <GreetingMessage name={name} /> {/* Pass name as a prop */}
      <input type="text" value={newName} onChange={handleNameChange} placeholder="Enter a new name" />
      <button onClick={handleButtonClick}>Change Name</button>
    </div>
  );
}

export default App;