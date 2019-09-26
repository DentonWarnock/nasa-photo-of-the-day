import React from "react";

export default function MediaVideo(props) {
  return (
  <div className="photo-card video-card">
    <iframe src={props.url} title={props.title} width="750px" height="500px"></iframe>
    <h1>{props.title}</h1>
    <p>{props.explanation}</p>      
  </div>
)
}