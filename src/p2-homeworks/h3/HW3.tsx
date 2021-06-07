import React, {SetStateAction, useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

export type UserType = {
    id: string
    name: string
}

function HW3() {

    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        const user = {id: v1(), name: name}
        setUsers([...users, user])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
