import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {dogImage ? (
        <img src={dogImage.message} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;