/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Lazy from './components/Lazy';

const About = <Lazy url="/about" />;
const MapTest = <Lazy url="/mapTest" />;
const Guide = <Lazy url="/guide" />;

function App() {
  return (
    <AppContainer className="App">
      <Routes>
        <Route path="/" element={Guide} />
        <Route path="/maptest" element={MapTest} />
        <Route path="/about" element={About} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div``;

export default App;
