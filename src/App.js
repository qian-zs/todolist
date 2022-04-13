import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

import MyHeader from './components/Header';
import AddInput from './components/AddInput';
import TodoItem from './components/TodoItem';
import CheckModal from './components/Modal/CheckModal';
import EditModal from './components/Modal/EditModal';

function App() {
  const [isInputShow, setInputShow] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [isShowCheckModal, setShowCheckModal] = useState(false);
  const [isShowEditModal, setShowEditModal] = useState(false);
  const [currentData, setCurrentData] = useState({});

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

  const openCheckModal = useCallback((id) => {
    _setCurrentData(todoList, id);
    setShowCheckModal(true);
  }, [todoList]);

  const openEditModal = useCallback((id) => {
    _setCurrentData(todoList, id);
    setShowEditModal(true);
  }, [todoList]);

  const submitEdit = useCallback((newData, id) => {
    setTodoList((todoList) => {
      return todoList.map((item) => {
        if (item.id === id) {
          item = newData;
        }
        return item;
      });
    });
    setShowEditModal(false);
  }, []);

  function _setCurrentData(todoList, id) {
    setCurrentData(() => todoList.filter(item => item.id === id)[0]);
  }

  return (
    <div className="App">
      <CheckModal isShowCheckModal={isShowCheckModal} closeModal={() => { setShowCheckModal(false) }} data={currentData} />
      <EditModal isShowEditModal={isShowEditModal} data={currentData} submitEdit={submitEdit} />
      <MyHeader openInput={() => setInputShow(!isInputShow)} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
      <ul className='todo-list'>
        {
          todoList.map((item, index) => {
            return (
              <TodoItem data={item} key={index} openCheckModal={openCheckModal} openEditModal={openEditModal} />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;