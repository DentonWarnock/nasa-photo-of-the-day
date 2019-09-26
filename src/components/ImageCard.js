import React from "react";
import { StyledCard } from '../Styles.js';

export default function ImageCard(props) {
  return (
  <StyledCard>
    <img src={props.url} alt={props.title}></img>
    <h1>{props.title}</h1>
    <p>{props.explanation}</p>      
  </StyledCard>
  )
}