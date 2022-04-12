import React from "react";

import './index.scss';

import Modal from "../";

function EditModal(props) {
    const { isShowEditModal, data } = props;

    return (
        <Modal isShowModal={isShowEditModal} modalTitle="编辑事件">
            <p className="topic">
                <textarea ref={inputRef}></textarea>
            </p>
            <p className="topic"></p>
            <p className="topic"></p>
        </Modal>
    );
}

export default EditModal;