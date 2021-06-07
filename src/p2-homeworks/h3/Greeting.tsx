import React, {ChangeEvent, KeyboardEvent} from 'react'

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (event: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting = (props: GreetingPropsType) => {
    return (
        <div>
            <input value={props.name} onChange={props.setNameCallback} className={props.error ? 'error' : ''}/>
            {props.error && <div className='error'>{props.error}</div>}
            <button onClick={props.addUser}>add</button>
            <span>{props.totalUsers}</span>
        </div>
    )
}

export default Greeting
