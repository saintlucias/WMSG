import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {

  const navigate = useNavigate();

  const toMainStage = () => {
    return navigate('/');
  } 


  return (
    <AppContainer>
      <MH2>App page</MH2>
      <BtnMS onClick={toMainStage}>
        Main page
      </BtnMS>
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div `
  display: grid;
  margin: auto;
  justify-content: center;
`;


const MH2 = styled.h2 `
`;

const BtnMS = styled.button `
    border: none;
    border-radius: 5px;
    width:100px;
    height:30px;
    font-weight: bold;
    color: white;
    background-color: rgba(0, 0, 0, 1);
    cursor: pointer;
    transition: 0.15s;

    &:hover {
        background-color : rgba(205, 205, 205, 1);
        color:black;
        border-color: #aaa;
    }
`;