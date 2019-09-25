import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PhotoCard from "./components/PhotoCard.js";  
import moment from "moment";

function App() {
  const [data, setData] = useState("test data");
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [counter, setCounter] = useState(1);

  function handleDateChange () {
    setDate(moment().subtract(counter, "days").format('YYYY-MM-DD'));
    setCounter(counter + 1);
  }

  console.log(date);

  useEffect(() => {
    async function fetchData() {
      try {
        //const photoData = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        const photoData = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DaHDhBGUKq3Eenp4GTC9kKka3MCfNCEDiu55Nm66&date=${date}`);
        setData(photoData.data);  
        //console.log(data); 
      } catch (error) {
        console.log(error);
      } // try block
    } // fetchData()

    fetchData()
  }, [date]);
  
  return (
    <div className="App">
      <PhotoCard 
        title={data.title} 
        url={data.url} 
        explanation={data.explanation} 
        date={date} 
        handleDateChange={handleDateChange}
        />
    </div>
  );
}

export default App;
