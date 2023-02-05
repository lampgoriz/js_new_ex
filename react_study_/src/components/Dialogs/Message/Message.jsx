import React from "react";
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
            <p> {props.message}</p>
        </div>
    );
}

export default Message;