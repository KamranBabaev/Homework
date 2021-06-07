import React from 'react';
import style from './Message.module.css'

export type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;

}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} className={style.avatar} alt=''/>

            <div className={style.corner}></div>
            <div className={style.chat}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;
