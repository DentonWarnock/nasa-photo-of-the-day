import React, { useState, useEfftect } from "react";
import "./App.css";
import axios from "axios";
import PhotoCard from "./components/PhotoCard.js";  

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        
      </p>
      <PhotoCard />
    </div>
  );
}

export default App;
