import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 100%;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: black; 
  margin: 0 auto;
`
export const StyledHeader = styled.div`
  width: 85%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  
  h5 {
    color: white;
    font-size: 1rem;
  }
  span {
    color: dodgerblue;
  }
`

export const StyledCard = styled.div`
  width: 85%;
  height: 10%;
  color: white;
  margin-top: 1rem;
  margin: 1rem auto;

  img {
    max-width: 100%;
  }
  h1 {
    color: dodgerblue;
    font-size: 3rem;
  }
  p {
    line-height: 2rem;
    font-size: 1.25rem;
  }
`

export const StyledButton = styled.button`
  background: dodgerblue;
  color: white;
  font-size: 1rem;
  width: 15rem;
  border: none;
  border-radius: 8px;
  height: 2.5rem;
  margin: 0 auto;  

  &:hover {
    background: white;
    color: dodgerblue;
    cursor: pointer;
    border: 2px solid dodgerblue;
    border-radius: 10px;
  }
`

export const StyledIFrame = styled.iframe`
  width: 800px;
  height: 600px;
  `