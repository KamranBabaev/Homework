import React, {useState} from 'react'
import Affairs from './Affairs'

export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') {
        return affairs
    } else if (filter === "low") {
        return affairs.filter(a => a.priority === 'low')
    } else if (filter === "middle") {
        return affairs.filter(a => a.priority === 'middle')
    } else if (filter === "high") {
        return affairs.filter(a => a.priority === 'high')
    } else {
    }
    return affairs
}

export const deleteAffair = (affairs: Array<AffairType>, id: number): Array<AffairType> => {
    return affairs.filter(af => af.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs)

    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id))

    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

        </div>
    )
}

export default HW2
