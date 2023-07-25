'use client'
import { Disclosure } from '@headlessui/react'


const Toggle5 = () => {

    return (

        <div className=' rounded-lg w-[150px] '>
            <Disclosure >
                <div className=' flex flex-center items-center justify-center border-orange-500 border-2 rounded-lg '>
                    <Disclosure.Button >
                        basic?
                    </Disclosure.Button>
                </div>
                <Disclosure.Panel className="text-gray-500 flex justify-center  ">
                    Yes! look Basic
                </Disclosure.Panel>
            </Disclosure>
        </div >
    )
}

export default Toggle5


