import React from "react";
import {useState} from "react"

function PlantCard( {name, image, price} ) {
  //state to hold T/F of toggle button
  const [toggleButton, setToggleButton] = useState(true)
  //toggles the state of button between true and false OnClick
  const handleToggle = () => {
    setToggleButton(!toggleButton)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {toggleButton ? (<button className="primary" onClick={handleToggle} >In Stock</button>) : (<button onClick={handleToggle} >Out of Stock</button>)}
    </li>
  );
}

export default PlantCard;
