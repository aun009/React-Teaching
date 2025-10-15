import React from 'react'
import { ArrowDownRight } from 'lucide-react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 relative overflow-hidden rounded-4xl p-5   '>
        <img className='h-full rounded-3xl w-full relative object-cover' src={props.img} alt="" />
        
        <RightCardContent id={props.id}/>
    </div>
  )
}

export default RightCard