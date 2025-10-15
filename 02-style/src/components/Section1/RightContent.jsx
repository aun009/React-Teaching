import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full overflow-x-auto  p-6  w-3/4  flex items-center justify-start'>
        {props.users.map((elem, idx)=> {
            return <RightCard key={idx} id={idx} img={elem.img}/>
        })}
    </div>
  )
}

export default RightContent
