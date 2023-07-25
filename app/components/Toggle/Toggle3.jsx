'use client'
import { useState } from 'react'
import { Switch } from '@headlessui/react'


const Toggle3 = () => {

    const [enabled, setEnabled] = useState(false)

    return (

        <Switch
            checked={enabled}
            onChange={setEnabled}
            className="relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-blue-600 ui-not-checked:bg-gray-200"
        >
            <span className="sr-only">Enable notifications</span>
            <span className={
                enabled ? ' inline-block h-4 w-4 transform rounded-full bg-black transition ui-checked:translate-x-6 ui-not-checked:translate-x-1'
                    : ' inline-block h-4 w-4 transform rounded-full bg-rose-500 transition ui-checked:translate-x-6 ui-not-checked:translate-x-1'
            } />
            <h1>{enabled ? 'ดำ'
                : 'แดง'}</h1>
        </Switch>
    )
}

export default Toggle3
