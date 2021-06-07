import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair.id)
    }

    return (
        <div className={style.affair}>
            <div className={style.item}>{props.affair.name}</div>
            <div className={style.priority}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
