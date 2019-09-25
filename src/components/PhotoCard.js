import React from "react";

export default function PhotoCard(props) {
  return (
    <div className="photo-card">
      <img src={props.url} alt={props.title}></img>
      <h1>{props.title}</h1>
      <p>{props.explanation}</p>
      <h5>Photo published by NASA on {props.date}</h5>
    </div>
  )
}