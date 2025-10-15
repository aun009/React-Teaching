import React from 'react'
import { ArrowDownRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10  flex flex-col justify-between text-white'>
            <h2 className='bg-white font-bold text-black rounded-full h-10 w-10 flex justify-center items-center'>{props.id}</h2>
            <div>
                <p className='text-lg leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil vero cum, eveniet nobis id.</p>

                <div className='flex justify-between'>
                    <button className='bg-blue-600 w-30 p-2 rounded-4xl'>
                        Satisfied
                    </button>

                    <button className='bg-blue-300 text-black w-10 p-2 rounded-4xl'>
                        <ArrowDownRight />
                    </button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent