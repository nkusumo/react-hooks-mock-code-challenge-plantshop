import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  let plantArray = plants.map(plant => <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} />)

  return (
    <ul className="cards">{plantArray}</ul>
  );
}

export default PlantList;
