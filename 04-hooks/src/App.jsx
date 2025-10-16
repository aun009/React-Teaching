import React, { useState } from 'react'

const App = () => {

    const [user, setuser] = useState({user : "Arun", age:30 })

    // const btnClicked = ()=> {
    //     const newUser = {...user}

    // }

    const [num, setnum] = useState(0)

    const btnClicked = ()=> {
        setnum(prev=> (prev+1)) // this is called batch updates
        setnum(prev=> (prev+1))
        // setnum(num+1)
        // setnum(num+1)

        setuser(prev => ({ // this is there for the objects
          ...prev,
          age: prev.age+1
        }))
        console.log(age)
    }

    const changeName = ()=> {
        const newUser = {...user}
        newUser.user = "Yash"
        setuser(newUser)
    }
 
  return (
    <div className='h-screen bg-amber-200 w-full'>
        <h2>My name is {user.user}</h2>
        <button onClick={changeName} className='bg-black text-white p-4 rounded-3xl mt-20'>Click me and change</button>
        <h1>{num}</h1>
        <button onClick={btnClicked} className='bg-black text-white p-4 rounded-3xl ml-2'>inc {user.age}</button>
    </div>
  )
}

export default App