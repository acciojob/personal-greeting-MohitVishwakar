
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count ,setcount] = useState("");
  let entry =(e) =>{
      setcount("Hello " + e.target.value + "!");
  }
  return (
    <div>
       <input type="text" 
       onChange={entry}
       />
       <p>{count}</p>
    </div>
  )
}

export default App
