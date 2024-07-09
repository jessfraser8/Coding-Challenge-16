// U09226075
// Create App.js.

// Import css.
import './App.css';
// Import react.
import React from 'react';
// Import Gallery.
import Gallery from './Gallery.js';

// Create App to make webpage.
function App() {
  return (
    <div className='App'>
      <Gallery employees={employees}/>
    </div>
  );
}

// Export App to make webpage.
export default App;

// Create data array.
const employees = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Software Engineer",
    photoURL: "https://thumbs.dreamstime.com/b/portrait-beautiful-smiling-office-worker-25428617.jpg"
  },
  {
    id: 2,
    name: "John Smith",
    role: "Manager",
    photoURL: "https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
  },
  {
    id: 3,
    name: "Sidney Crosby",
    role: "Data Analyst",
    photoURL: "https://media.istockphoto.com/id/1350800599/photo/happy-indian-business-man-leader-manager-standing-in-office-headshot-portrait.jpg?s=612x612&w=0&k=20&c=LIkuuouBU0h0t-fnKKHnNeWAjFXD7yIRhHlNrKbuhvY="
  }
]
