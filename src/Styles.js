import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 100%;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: black; 
`
export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  
  h5 {
    color: white;
  }
`

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;  
`

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background: dodgerblue;
  color: white;
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