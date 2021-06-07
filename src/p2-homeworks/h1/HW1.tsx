import React from 'react'
import Message from "./Message";
import {MessagePropsType} from "./Message";

const messageData: MessagePropsType = {
    avatar: 'https://icdn.lenta.ru/images/0000/0269/000002690792/pic_1358876069.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            <hr/>
        </div>
    )
}

export default HW1
