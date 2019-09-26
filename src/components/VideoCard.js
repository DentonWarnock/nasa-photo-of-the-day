import React from "react";
import { StyledIFrame, StyledCard } from '../Styles.js';



export default function VideoCard(props) {
  return (
  <StyledCard>
    <StyledIFrame src={props.url} title={props.title}></StyledIFrame>
    <h1>{props.title}</h1>
    <p>{props.explanation}</p>      
  </StyledCard>
)
}