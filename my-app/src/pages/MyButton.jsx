import React, { useState } from 'react'

function MyButton() {
 const [count, setCount] = useState(0)
 function handleClick(){
  setCount (count + 1)
 }
 
  return (
    <>
      <button className='btn' onClick={handleClick}>
       Click {count} time
      </button>
    </>
  )
}

export default MyButton
