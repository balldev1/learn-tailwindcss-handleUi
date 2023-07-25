'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const DialogMo3 = () => {

    let [isOpen, setIsOpen] = useState(true)

    return (

        <div>
            {/* {กด ถึงใช้งานหน้าเว็บได้} */}
            <Dialog open={isOpen} onClose={() => setIsOpen(true)}>
                <div className='flex  justify-center items-center border-2 w-[140px] h-[150px] border-orange-500'>

                    <Dialog.Panel>


                        <Dialog.Title>กฎ การใช้งาน</Dialog.Title>
                        <Dialog.Description>
                            test test

                        </Dialog.Description>

                        <p>
                            1800x500
                        </p>
                        <p>
                            1800x500
                        </p>
                        <p>
                            1800x500
                        </p>

                        <button className='' onClick={() => setIsOpen(false)}>ยอมรับ</button>
                    </Dialog.Panel>
                </div>

            </Dialog >
        </div>


    )
}

export default DialogMo3
