import React from "react";
import './index.scss';

function TodoItem(props) {
  const { data, openCheckModal } = props;
  return (
    <li className="todo-item">
      <div className="check-box">
        <input type="checkbox" defaultChecked={data.completed} />
      </div>
      <span className="content" style={{ 'textDecoration': data.completed ? 'line-through' : 'none' }}>
        {data.content}
      </span>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => { openCheckModal(data.id) }}>查看</button>
        <button className="btn btn-warning">编辑</button>
        <button className="btn btn-danger">删除</button>
      </div>
    </li>
  );
}

export default TodoItem;