import React from 'react';
import GreetingMessage from './GreetingMessage';

function App() {
  const name = "Aman Gupta";

  return (
    <div>
      <h1>Welcome to My Greeting App</h1>
      <GreetingMessage name={name} /> {/* Pass name as a prop */}
    </div>
  );
}

export default App;