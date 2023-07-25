'use client'
import { Disclosure, Transition } from '@headlessui/react'


const Toggle6 = () => {

    return (

        <div>
            <Disclosure>
                <Disclosure.Button className='border-2 border-orange-500 rounded-lg flex flex-col w-[200px] justify-center items-center'>duration?</Disclosure.Button>

                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel>
                        Yes! You can purchase a license that you can share with your entire
                        team.
                    </Disclosure.Panel>
                </Transition>
            </Disclosure>
        </div>
    )
}

export default Toggle6


