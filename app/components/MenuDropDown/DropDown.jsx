'use client'
import React from 'react'
import { Menu } from '@headlessui/react'
import { TfiMenu } from 'react-icons/tfi'

const DropDown = () => {




    return (
        <div className='flex flex-col   '>

            <Menu >
                <Menu.Button className=' flex flex-col border-2 w-[30px] h-[30px] items-center rounded-md bg-gray text-red-500 border-red-500 justify-center ' >
                    <TfiMenu />
                </Menu.Button>
                <Menu.Items className='flex flex-col px-5 items-start rounded-md border-2 bg-white-200 mr-5 border-red-500'>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-blue-500 text-white'}`}
                                href="/a"
                            >
                                test
                            </a>
                        )}

                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`${active && 'bg-blue-500'}`}
                                href="/b"
                            >
                                test
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item disabled>
                        <span className="opacity-75">Invite a friend (coming soon!)</span>
                    </Menu.Item>
                </Menu.Items>
            </Menu >
        </div>



    )
}

export default DropDown
