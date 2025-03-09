import React from 'react'

function Navbar() {
  return (
    <div className='my-4 flex h-[60px] items-center justify-center gap-2 
    rounded-lg bg-white text-xl font-medium'>    
{/* lg: (Large Screen)-screen width is 1024px or larger. xl: (Extra Large Screen)- screen width is 1280px or larger. */}
        <img src="/firebase.svg"/>
        <h1>Firebase Contact App</h1>
    </div>
  )
}

export default Navbar