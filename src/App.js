// src/App.js
import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Gallery from './Gallery';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftContainer = styled.div`
  flex: 1;
  background-color: #222;
`;

const RightContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #333;
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <LeftContainer />
      <RightContainer>
        <Tabs />
        <Gallery />
      </RightContainer>
    </AppContainer>
  );
}

export default App;
