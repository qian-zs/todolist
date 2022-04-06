import React from "react";

function Test(props) {
    const { title, changeTitle } = props;
    return (
        <>
            <h1>{title}</h1>
            <button onClick={() => changeTitle('这是第三个标题')}>更改标题</button>
        </>
    )
}

export default Test;