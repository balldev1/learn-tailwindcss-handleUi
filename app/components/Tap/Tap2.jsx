'use client'
import { Tab } from '@headlessui/react'


const Tap2 = () => {

    return (
        <div className='flex flex-col items-center  w-[180px] '>
            <Tab.Group >

                <Tab.List  >
                    <Tab className='border-2 p-1 border-rose-500'>Tab 1</Tab>
                    <Tab className='border-2 p-1 border-rose-500'>Tab 2</Tab>
                    <Tab className='border-2 p-1 border-rose-500'>Tab 3</Tab>
                </Tab.List>

                <Tab.Panels>
                    <div className='flex mt-2'>
                        <Tab.Panel className='text-white bg-rose-500 '>Content 1</Tab.Panel>
                        <Tab.Panel className='text-white bg-orange-500'>Content 2</Tab.Panel>
                        <Tab.Panel className='text-white bg-sky-500'>Content 3</Tab.Panel>
                    </div>
                </Tab.Panels>
            </Tab.Group>
        </div>

    )
}

export default Tap2
