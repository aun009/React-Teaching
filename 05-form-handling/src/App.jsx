import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const formSubmitted = (e)=> {
    e.preventDefault()
    console.log("form submitted by ",  title)
    setTitle('')
  }

  return (
    <div className='h-screen  flex-col bg-black'>
      <form>
        <input type="text" className='text-white p-5 mt-4 ml-6 border-2' value = {title} onChange={(e)=> {
          setTitle(e.target.value)
          console.log(e.target.value)
        }}  placeholder='Enter name'/>
        <button onClick={(e)=> {
          formSubmitted(e)
        }} className='text-white ml-30 '>Submit</button>
      </form>text
    </div>
  )
}

export default App


// now two way binding, ek tir se 2 nishan