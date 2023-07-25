'use client'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const Radio = () => {
    let [plan, setPlan] = useState('startup')

    return (
        <RadioGroup value={plan} onChange={setPlan}>
            <RadioGroup.Label className='border-2 rounded-md p-1 border-orange-500'>Focus</RadioGroup.Label>
            <RadioGroup.Option className='mt-2' value="startup">
                {({ checked }) => (
                    <span className={checked ? 'bg-rose-400' : ''}>Startup</span>
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="business">
                {({ checked }) => (
                    <span className={checked ? 'bg-rose-400' : ''}>Business</span>
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="enterprise">
                {({ checked }) => (
                    <span className={checked ? 'bg-rose-400' : ''}>Enterprise</span>
                )}
            </RadioGroup.Option>
        </RadioGroup>
    )
}

export default Radio
