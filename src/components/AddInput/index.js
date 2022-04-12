import React, { useRef, useState } from "react";
import './index.scss';

function AddInput(props) {

    const [inputValue, setInputValue] = useState('');

    const { isInputShow, addItem } = props;

    const submitValue = () => {
        if (inputValue.length === 0) {
            return;
        }
        addItem(inputValue);
        setInputValue('');
    };

    return (
        <>
            {
                isInputShow && (
                    <div className="input-wrapper">
                        <input type="text" placeholder="请输入待办事件" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                        <button className="btn btn-primary" onClick={submitValue}>增加</button>
                    </div>
                )
            }
        </>
    );
}

export default AddInput;