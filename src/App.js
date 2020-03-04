import React from 'react';
import {ThemeProvider} from "styled-components"
import stickTheme from "./themes/stick";
import logo from './logo.svg';
import './App.css';
import * as S from "./styles";

function App() {
  return (
    <ThemeProvider theme={stickTheme}>
      <S.Container>
        
        <S.Header area="quimica">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <S.Button erro>PÂNICO</S.Button>
          
        </S.Header>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;