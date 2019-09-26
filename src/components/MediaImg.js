import React from "react";

export default function MediaImg(props) {
  return (
  <div className="photo-card">
    <img src={props.url} alt={props.title}></img>
    <h1>{props.title}</h1>
    <p>{props.explanation}</p>      
  </div>
  )
}