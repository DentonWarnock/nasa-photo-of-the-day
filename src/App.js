import React, { useState, useEffect }  from "react";
import "./App.css";
import moment from "moment";
import axios from "axios";

import Header from "./components/Header.js";
import MediaImg from "./components/MediaImg.js";
import MediaVideo from "./components/MediaVideo.js";

function App() { 
  const [data, setData] = useState("test data");
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [counter, setCounter] = useState(1);
  const apiKey= "DaHDhBGUKq3Eenp4GTC9kKka3MCfNCEDiu55Nm66";

  function handleDateChange () {
    setDate(moment().subtract(counter, "days").format('YYYY-MM-DD'));
    setCounter(counter + 1);
  }

  console.log(date);

  useEffect(() => {
    async function fetchData() {
      try {
        //const photoData = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        const photoData = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
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
      <Header date={date} handleDateChange={handleDateChange} />
      {data.media_type === "image" ? 
        <MediaImg 
          title={data.title} 
          url={data.url} 
          explanation={data.explanation}
        /> : 
        <MediaVideo 
          title={data.title} 
          url={data.url} 
          explanation={data.explanation}
        />}
    </div>
  )
}

export default App;
