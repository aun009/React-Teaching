import React from 'react'

const State = () => {
    const [a, seta] = useState(0)  // one variable is read only and other is write only 

    const increaseNum = () => {
     seta(a+1)
    }

    const decreaseNum = () => {
        seta(a-1) // set works asynchronuously  
    }
  return (
    

  
    <div className='h-screen p-10 w-full bg-black'>
      <h1 className='text-amber-400 font-bold p-2 w-fit rounded-2xl object-fit bg-gray-800 text-7xl mb-4'>Value is = {a}</h1>
      <button onClick={increaseNum} className='mt-10 bg-gray-300 p-5 m-5 text-black rounded-lg'>Increase</button>
      <button onClick={decreaseNum} className='mt-10 bg-gray-300 p-5 m-5 text-black rounded-lg'>Decrease</button>
    </div>
    
  )
}

export default State