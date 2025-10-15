import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-6'>
        <h4 className='bg-black text-white uppercase px-5 py-2 rounded-full'>Target Audience</h4>
        <button className='bg-gray-200 uppercase rounded-full px-6 py-2 text-xs tracking-wider' >Digital banking platform</button>
    </div>
  )
}

export default Navbar