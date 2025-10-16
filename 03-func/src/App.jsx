import React from 'react'

const App = () => {



  return (
    <div className='h-screen w-full bg-red-300 text-white flex flex-col items-center justify-center gap-5'>
      <div onMouseMove={(elem)=> {
        console.log(elem.clientX)
      }} className="h-64 w-64 bg-amber-200 text-black flex items-center justify-center">
        Box not
      </div>

    </div>
  )
}

export default App