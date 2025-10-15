import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3  flex flex-col items-top justify-center'>
      <div className='p-4'>
        <h3 className='text-6xl mb-7 font-bold mb-5 leading-[1.2]'>Prospective <br /> <span className='bg-gray-100 rounded-full'>Customer</span>  <br />Segmentation</h3>
        <p className='text-lg text-gray-600 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse incidunt voluptatum illo earum doloremque ipsam!</p>

        <div className="icon">
        <ArrowUpRight className=''/>
      </div>
      </div>
      
    </div>
  )
}

export default LeftContent
