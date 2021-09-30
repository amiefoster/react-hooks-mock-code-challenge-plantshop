import React from "react";
import {useState} from "react";

function NewPlantForm( {setPlantList, plantList, searchTerm} ) {
  const [formData, setFormData] = useState({
      "name": "",
      "image": "",
      "price": 0
    });

  //on change it will update the form data
    function handleChange(event) {
      setFormData({
        ...formData, 
        [event.target.name]: event.target.value
      });
    }

//on submit you will send the form data and clear out form 
    function handleSubmit(event){
      event.preventDefault()
      fetch('http://localhost:6001/plants', {
        method: "POST", 
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            "name": formData.name, 
            "image": formData.image, 
            "price": parseInt(formData.price)
        })
      })
      .then(response => response.json())
      .then(newPlant => {
        return setPlantList([...plantList, newPlant])
      })
      setFormData({
        "name": "",
        "image": "",
        "price": 0
      })
    }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="name"  
            value={formData.name} 
            placeholder="Plant name"
            onChange={handleChange} />
        <input 
            type="text" 
            name="image" 
            value={formData.image}
            placeholder="Image URL" 
            onChange={handleChange} />
        <input 
            type="number" 
            name="price" 
            step="0.01" 
            value={formData.price}
            placeholder="Price" 
            onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
