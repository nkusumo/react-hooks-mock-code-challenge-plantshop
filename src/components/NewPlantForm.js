import React, { useState } from "react";

function NewPlantForm({handleNewPlant}) {

  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  function handlePlantName(e) {
    setPlantName(e.target.value);
  }

  function handlePlantImage(e) {
    setPlantImage(e.target.value);
  }

  function handlePlantPrice(e) {
    setPlantPrice(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newPlant = {name: plantName, image: plantImage, price: plantPrice}
    handleNewPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantName} onChange={handlePlantName} />
        <input type="text" name="image" placeholder="Image URL" value={plantImage} onChange={handlePlantImage} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantPrice} onChange={handlePlantPrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
