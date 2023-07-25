'use client'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
    { id: 1, name: 'useState submit' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
]

const DropDown5 = () => {

    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <div className='border-2 border-orange-500 rounded-lg flex flex-col w-[200px] justify-center items-center p-1'>
            <form action="/projects/1/assignee" method="post">
                <Listbox
                    value={selectedPerson}
                    onChange={setSelectedPerson}
                    name="assignee"
                >
                    <Listbox.Button>{selectedPerson.name}</Listbox.Button>
                    <Listbox.Options>
                        {people.map((person) => (
                            <Listbox.Option key={person.id} value={person}>
                                {person.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
                <button className='flex justify-center border-orange-500 bg-orange-100  border-2 mb-2 rounded-md w-[100px]'>Submit</button>
            </form>
        </div>

    )
}

export default DropDown5
