import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PhotoCard from "./components/PhotoCard.js";  

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        //const photoData = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        const photoData = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DaHDhBGUKq3Eenp4GTC9kKka3MCfNCEDiu55Nm66");
        console.log(photoData);
        setData(photoData.data);        
      } catch (error) {
        console.log(error);
      } // try block
    } // fetchData()
    fetchData()
  }, []);

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
