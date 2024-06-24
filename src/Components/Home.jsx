import React from 'react'
import { useState,useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [value, setValue] = useState('')
  let navigate=useNavigate()
  const handlesubmit=useCallback(()=>{
    if(value){
      navigate(`/room/:${value}`)
    }
},[navigate,value])
  return (
    <div className='flex flex-col mt-[50px] items-center mx-auto'>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className='border border-black w-[400px] px-[10px] py-[5px] rounded-lg' placeholder='Enter meet id'/>
        <button onClick={handlesubmit} className='border-black border mt-[10px] rounded-lg bg-blue-500 px-[10px]' >Create Meeting</button>
    </div>
  )
}

export default Home