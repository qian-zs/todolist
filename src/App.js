import React, { useState } from 'react';
import './App.css';

import MyHeader from './components/Header';
import AddInput from './components/AddInput';

function App() {

  const [isInputShow, setInputShow] = useState(false);

  const addItem = (value) => {
    console.log(value);
  }

  return (
    <div className="App">
      <MyHeader openInput={() => setInputShow(!isInputShow)} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
    </div>
  );
}

export default App;