import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import Counter from './Counter';
import './App.css';


function App() {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  );
}

export default App;
