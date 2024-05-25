import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  // Define initial state using useState()
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    director: ''
  });

  // Function to handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state using ObjectUpdate to merge the previous state with the new one
    setMovie(prevState => ({ ...prevState, [name]: value }));
  };

  // Function to handle edit button click
  const handleEditClick = (field) => {
    // Prompt the user to edit the text
    const newText = prompt(`Enter new ${field}:`, movie[field]);
    // Update the state with the new text if it's not null (i.e., if the user didn't cancel)
    if (newText !== null) {
      setMovie(prevState => ({ ...prevState, [field]: newText }));
    }
  };

  return (
    <div className="center">
      <div className="App">
        <h1>Movie Details</h1>
        <div className="content">
          <form>
            <label htmlFor="title" className="label">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className="input"
              placeholder="Enter movie title"
              value={movie.title}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="genre" className="label">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              className="input"
              placeholder="Enter movie genre"
              value={movie.genre}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="director" className="label">Director:</label>
            <input
              type="text"
              id="director"
              name="director"
              className="input"
              placeholder="Enter movie director"
              value={movie.director}
              onChange={handleInputChange}
            />
          </form>
          <div className="preview">
            <h2>Movie Preview:</h2>
            <p>
              <strong>Title:</strong> {movie.title}{" "}
              <button onClick={() => handleEditClick("title")}>Edit</button>
            </p>
            <p>
              <strong>Genre:</strong> {movie.genre}{" "}
              <button onClick={() => handleEditClick("genre")}>Edit</button>
            </p>
            <p>
              <strong>Director:</strong> {movie.director}{" "}
              <button onClick={() => handleEditClick("director")}>Edit</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
