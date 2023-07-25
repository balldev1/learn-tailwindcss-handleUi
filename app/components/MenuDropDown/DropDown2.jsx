'use client'
import React from 'react'
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'

const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
]


const DropDown2 = () => {
    return (
        <div className='flex flex-col items-start'>
            <Menu>
                <Menu.Button className='border-2 w-[100px] border-orange-500 rounded-lg text-black font-bold'>Loop link</Menu.Button>
                <Menu.Items className='flex flex-col border-2 w-[200px] px-2 border-orange-500 rounded-lg text-black font-bold'>
                    {links.map((link) => (
                        /* Use the `active` state to conditionally style the active item. */
                        <Menu.Item key={link.href} as={Fragment}>
                            {({ active }) => (
                                <a
                                    href={link.href}
                                    className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>

        </div>
    )
}

export default DropDown2
