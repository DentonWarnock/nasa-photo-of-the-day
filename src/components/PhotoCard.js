import React from "react";

export default function PhotoCard(props) {
  return (
    <div className="photo-card">
      <h1>{props.title}</h1>
      <img src={props.url} alt={props.title}></img>
      <p>{props.explanation}</p>
    </div>
  )
}