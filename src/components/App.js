// create your App component here
import { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImage(data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
