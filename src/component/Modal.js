import React, {useState} from 'react';
import './../App.css';
import './Modal.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false); //isOpen 상태를 만들어준다.

    const openModal = () => {
        setIsOpen(!isOpen);
    };

    return (
    <div className="wrapper">
        <h1>Modal</h1>
        <button className="modal_btn" onClick={openModal}>Open Modal</button>
        {isOpen ? (
            <div className="modal_bg">
                <div className="modal_box">
                    <span className="close_btn" onClick={openModal}>
                        &times;
                    </span>
                    <p className="txt">HELLO, CODESTATES!</p>
                </div>
            </div>
        ) : null}
        </div>
    )
};

export default Modal;