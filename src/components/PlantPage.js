import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react"

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  //const [searchTerm, setSearchTerm] = useState("")
  //const [filteredPlants, setFilteredPlants] = useState([])

  //fetch plants and add to plantList then send plantList to plantList componant
    useEffect(() => {
      fetch('http://localhost:6001/plants')
        .then(response => response.json())
        .then(plants => setPlantList(plants))
    }, [])

    function handleSearchPlant(searchedPlant) {
      const searchedPlants = plantList.filter(plant => {
       if (plant.name.toLowerCase().includes(searchedPlant.toLowerCase())) {
         return plantList}
      })
      setPlantList(searchedPlants)
    }
    
  return (
    <main>
      <NewPlantForm plantList={plantList} setPlantList={setPlantList} />
      <Search handleSearchPlant={handleSearchPlant} />
      <PlantList plantList={plantList} />
    </main>
  );
}

export default PlantPage;
