import React from "react";
import { StyledHeader, StyledButton } from '../Styles.js';
import moment from "moment";

export default function Header(props) {
  let displayDate = moment(props.date).format('MMMM Do YYYY');

  return (
  <StyledHeader>
    <h5><span>NASA's</span> astronomy picture of the day for <span>{displayDate}</span> -- {props.title}</h5>
    <StyledButton onClick={() => props.handleDateChange()}>See previous day's photo</StyledButton>
  </StyledHeader>
)
}