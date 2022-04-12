import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

import MyHeader from './components/Header';
import AddInput from './components/AddInput';
import TodoItem from './components/TodoItem';

function App() {
  const [isInputShow, setInputShow] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData') || '[]');
    setTodoList(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoList));
  }, [todoList]);

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
      <ul className='todo-list'>
        {
          todoList.map((item, index) => {
            return (
              <TodoItem data={item} key={index} />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;