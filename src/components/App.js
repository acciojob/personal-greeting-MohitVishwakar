
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count ,setcount] = useState("");
  let entry =(e) =>{
      setcount("Hello " + e.target.value + "!");
  }
  return (
    <div>
           <p>Enter your name:</p>
       <input type="text" placeholder="enter"
       onChange={entry}
       />
       <p>{count}</p>
    </div>
  )
}

export default App
