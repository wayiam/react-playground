import React, { useState } from 'react'
import './styles.css'


const Counter = () => {

  const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <div>
        <h2 className='number'>{count}</h2>
      </div>
      <div className='btns-container'>
        <button className='increment' onClick={(e) => setCount((count) => count + 1)}>+</button>
        <button className='increment' onClick={(e) => setCount((count) => count - 1)}>-</button>
      </div>
    </div>
  )
}

export default Counter