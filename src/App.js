import React, { useCallback, useState } from 'react';
import './App.css';

import MyHeader from './components/Header';
import AddInput from './components/AddInput';

function App() {
  const [isInputShow, setInputShow] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    };

    setTodoList((todoList) => [...todoList, dataItem]);
    setInputShow(false);
  }, []);

  return (
    <div className="App">
      <MyHeader openInput={() => setInputShow(!isInputShow)} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
    </div>
  );
}

export default App;