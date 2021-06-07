import React, {ChangeEvent, useState, KeyboardEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

function GreetingContainer(props: GreetingContainerPropsType) {
    const [name, setName] = useState<string>('')

    const [error, setError] = useState('')

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        const trimedName = event.currentTarget.value.trim()

        if (trimedName !== '') {
            setName(trimedName)
            setError('')
        } else {
            setName('')
            setError('ошибочка')
        }
    }

    const addUser = () => {
        props.addUserCallback(name);
        alert('Hello , ' + name);
    }

    const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }

    const totalUsers = props.users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
