import React from "react";
import { StyledHeader, StyledButton } from '../Styles.js';

export default function Header(props) {
  return (
  <StyledHeader>
    <h5>Published by <span>NASA</span> on {props.date}</h5>
    <StyledButton onClick={() => props.handleDateChange()}>See previous day's photo</StyledButton>
  </StyledHeader>
)
}