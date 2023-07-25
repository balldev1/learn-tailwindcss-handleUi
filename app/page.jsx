'use client'
import Image from 'next/image'
import DropDown from './components/MenuDropDown/DropDown'
import DropDown2 from './components/MenuDropDown/DropDown2'
import DropDown3 from './components/MenuDropDown/DropDown3'
import DropDown4 from './components/MenuDropDown/DropDown4'
import DropDown5 from './components/MenuDropDown/DropDown5'
import DropDown6 from './components/MenuDropDown/DropDown6'
import Toggle from './components/Toggle/Toggle'
import Toggle2 from './components/Toggle/Toggle2'
import Toggle3 from './components/Toggle/Toggle3'
import Toggle4 from './components/Toggle/Toggle4'
import Toggle5 from './components/Toggle/Toggle5'
import Toggle6 from './components/Toggle/Toggle6'
import DialogMo from './components/DialogModal/DialogMo'
import DialogMo2 from './components/DialogModal/DialogMo2'
import DialogMo3 from './components/DialogModal/DialogMo3'
import DialogMo4 from './components/DialogModal/DialogMo4'
import DialogMo5 from './components/DialogModal/DialogMo5'
import Radio from './components/RadioGroup/Radio'
import Tap from './components/Tap/Tap'
import Tap2 from './components/Tap/Tap2'
import Transition2 from './components/Transition/Transition2'
import { useState } from 'react'

export default function Home() {

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)


  const handleShow1 = () => {
    setShow1(true)
    setShow2(false)
    setShow3(false)
    setShow4(false)
  }

  const handleShow2 = () => {
    setShow2(true)
    setShow1(false)
    setShow3(false)
    setShow4(false)

  }

  const handleShow3 = () => {
    setShow3(true)
    setShow1(false)
    setShow2(false)
    setShow4(false)
  }

  const handleShow4 = () => {
    setShow4(true)
    setShow1(false)
    setShow2(false)
    setShow3(false)
  }

  const handleReset = () => {
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(false)
  }

  return (
    <div>
      <div className='flex  flex-col justify-center items-center mt-5 font-bold  gap-2'>
        <h1 >Nanthawat Cola</h1>
        <h1 >Learn Tailwindcss</h1>
        <div className='flex flex-row gap-2'>
          <div className='border-2 p-2 border-red-500 bg-red-500 hover:bg-red-400 rounded-md'>
            <button onClick={handleShow1} >test1</button>
          </div>
          <div className='border-2 p-2 border-yellow-500 bg-yellow-500 hover:bg-yellow-400 rounded-md'>
            <button onClick={handleShow2}>test2</button>
          </div>
          <div className='border-2 p-2 border-green-500 bg-green-500 hover:bg-green-400 rounded-md'>
            <button onClick={handleShow3}>test3</button>
          </div>
          <div className='border-2 p-2 border-yellow-500 bg-yellow-500 hover:bg-yellow-400 rounded-md'>
            <button onClick={handleShow4}>test4</button>
          </div>
          <div className='border-2 p-2 border-red-500 bg-red-500 hover:bg-red-400 rounded-md'>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>


      {/* {1} */}
      {
        show1 && (
          <div className='grid mt-5 grid-cols-5 ml-5 '>
            <DropDown />
            <DropDown2 />
            <DropDown3 />
            <DropDown4 />
            <DropDown5 />
          </div>
        )
      }


      {/* {2} */}
      {
        show2 && (
          <div className='grid mt-5 grid-cols-5 ml-5 '>
            <Toggle />
            <Toggle2 />
            <Toggle3 />
            <Toggle4 />
            <Toggle5 />
          </div>
        )
      }


      {/* {3} */}
      {
        show3 && (
          <div className='grid mt-10 grid-cols-5 ml-5  '>
            <Toggle6 />
            <DialogMo />
            <DialogMo2 />
            {/*แสดงเมือคลิก <DialogMo3 /> */}
            <DialogMo4 />
            <DialogMo5 />
          </div>
        )
      }


      {/* {4} */}
      {
        show4 && (
          <div className='grid mt-5 grid-cols-5 ml-5 '>
            <Radio />
            <Tap />
            <Tap2 />
            <Transition2 />
          </div>
        )
      }
      <div className='border-b mt-5 border-[3px]'></div>
    </div>

  )
}
