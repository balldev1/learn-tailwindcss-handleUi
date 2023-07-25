'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const DialogMo2 = () => {

    let [open, setModal] = useState(false)
    let [register, setRegister] = useState(true)

    const toggleRegister = () => {
        setRegister(true)
    }

    const toggleLogin = () => {
        setRegister(false)
    }

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
        setRegister(true)
    }


    return (

        <div>
            <div className='' >
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white border-orange-500 border-2
                     hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
                      focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open Register
                </button>
            </div>

            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                <Dialog.Panel className="w-full max-w-md 
                                transform overflow-hidden
                                 rounded-2xl bg-white p-6 text-left align-middle
                                  shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 "
                                    >
                                        {register ? 'Register' : 'Login'}
                                    </Dialog.Title>
                                    <div className="mt-2  ">

                                        {register && (
                                            <>

                                                <div>
                                                    <p className="text-sm text-gray-500 mb-2">
                                                        First name
                                                    </p>
                                                    <input className='border-2' type='text' />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500 mb-2 mt-2">
                                                        Last name
                                                    </p>
                                                    <input className='border-2' type='password' />
                                                </div>
                                            </>
                                        )
                                        }


                                        <div>
                                            <p className="text-sm text-gray-500 mb-2">
                                                Email
                                            </p>
                                            <input className='border-2' type='text' />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-2 mt-2">
                                                password
                                            </p>
                                            <input className='border-2' type='password' />
                                        </div>


                                    </div>

                                    <div className="mt-4 ">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border
                                             border-transparent bg-blue-100 px-4 py-2 text-sm font-medium
                                              text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2
                                               focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Summit!
                                        </button>

                                    </div>
                                    <div >


                                        {register ?
                                            <div>
                                                <div onClick={toggleLogin}
                                                    className='mt-2 flex cursor-pointer'>
                                                    👉 Click here login
                                                </div>
                                            </div>
                                            :
                                            <div>

                                                <div onClick={toggleRegister}
                                                    className='mt-2 flex cursor-pointer'>
                                                    👉 Click here  register
                                                </div>
                                            </div>}





                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default DialogMo2
