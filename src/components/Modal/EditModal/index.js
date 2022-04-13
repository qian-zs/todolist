import React, { useRef, useState } from "react";

import './index.scss';

import Modal from "../";

function EditModal(props) {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const inputRef = useRef();

  const { isShowEditModal, data, submitEdit } = props;

  const formatNewData = () => {
    const val = inputRef.current.value.trim();
    const valLen = val.length;

    if (valLen === 0) {
      inputRef.current.value = data.content;
      return;
    }

    const newData = {
      id: new Date().getTime(),
      content: val,
      completed: checkboxValue,
    };

    submitEdit(newData, data.id);
  };

  return (
    <Modal isShowModal={isShowEditModal} modalTitle="编辑事件">
      <p className="topic">时间：{data.id}</p>
      <p className="topic">
        <textarea className="text-area" ref={inputRef} defaultValue={data.content}></textarea>
      </p>
      <p className="topic">状态：<input type="checkbox" defaultChecked={data.completed ? true : false} onChange={(e) => setCheckboxValue(e.target.value)} value={checkboxValue} /></p>
      <button className="btn btn-primary comfirm-btn" onClick={formatNewData}>提交</button>
    </Modal>
  );
}

export default EditModal;