

import React from "react";
import { useState } from "react";





const MyComponent = () => {
  const [text,setText]=useState("");

const handleInputChange = (e) => {
  setText(e.target.value);

}


  return (
    <div>
      <label 
      id="text">
        Enter Email
        <input type= "text" id="text" value={text} onChange={handleInputChange} />
      
        <p>preview here:{text}</p>
      </label>





    </div>
  )
}

export default MyComponent;
