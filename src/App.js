import React, { useState } from 'react';
import './App.css';
import Test from './components/Test';

function App() {
  const [title, setTitle] = useState('这是一个标题测试');

  const changeTitle = (title) => {
    // setTitle('这是第二个标题测试');
    setTitle(title);
  }

  return (
    <div className="App">
      <Test title={title} changeTitle={changeTitle} />
    </div>
  );
}

export default App;
