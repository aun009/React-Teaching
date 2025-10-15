import React from 'react'
import Section1 from './components/Section1/Section1'


const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400',
      intro: '',
      tag: 'Underserved'
    },

    {
      img: 'https://images.unsplash.com/photo-1577084381380-3b9ea4153664?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400',
      intro: '',
      tag: 'Underbanged'
    },

    {
      img: 'https://images.unsplash.com/photo-1577084381380-3b9ea4153664?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400',
      intro: '',
      tag: 'Underbanged'
    }

  ]

  return (
    <div className="div">
      <Section1 users={users}/> // data flow from up to down
      {/* <Section2 /> */}
    </div>
  )
}

export default App