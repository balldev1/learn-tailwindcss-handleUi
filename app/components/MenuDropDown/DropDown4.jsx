'use client'
import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const people = [
    { id: 1, name: 'test test' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
]

const DropDown4 = () => {

    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <div className='border-2 border-orange-500 rounded-lg flex flex-col w-[200px] justify-center items-center'>
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <Listbox.Button>Show name user</Listbox.Button>
                <Listbox.Options>
                    {people.map((person) => (
                        <Listbox.Option
                            key={person.id}
                            value={person}
                            className="flex  ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                        >
                            <CheckIcon className=" ui-selected:block w-[20px] text-green-500" />
                            {person.id}.{person.name}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}

export default DropDown4
