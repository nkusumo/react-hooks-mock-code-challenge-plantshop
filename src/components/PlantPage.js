import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantArray, setPlantArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => {
      setPlantArray(data)
    })
  }, [])
  
  function handleNewPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => {
      let updatedArray = [...plantArray, data];
      setPlantArray(updatedArray)
    })
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const displayedPlants = plantArray.filter(plant => plant.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 )

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search handleSearch={handleSearch} search={search} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
