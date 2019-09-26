import React from "react";

export default function Header(props) {
  return (
  <div className="header">
    <h5>Photo published by NASA on {props.date}</h5>
    <button onClick={() => props.handleDateChange()}>See previous day's photo</button><br></br><br></br>
  </div>
)
}