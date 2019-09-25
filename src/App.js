import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PhotoCard from "./components/PhotoCard.js";  

function App() {
  const [data, setData] = useState("test data");

  useEffect(() => {
    async function fetchData() {
      try {
        //const photoData = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        const photoData = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DaHDhBGUKq3Eenp4GTC9kKka3MCfNCEDiu55Nm66");
        setData(photoData.data);  
        //console.log(data); 
      } catch (error) {
        console.log(error);
      } // try block
    } // fetchData()
    fetchData()
  }, []);
  console.log(data);
  return (
    <div className="App">
      <PhotoCard title={data.title} url={data.url} explanation={data.explanation} date={data.date}/>
    </div>
  );
}

export default App;
