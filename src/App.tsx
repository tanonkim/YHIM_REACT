import React from 'react';
import './styles/globals.css';
import Router from './Router';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
