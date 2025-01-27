import { useState } from 'react'
import Accordian from './Accordian'
import data from '../accordianData.json'
function App() {

  return (
    <div className='accordion'>
      {data.map(({ id, title, content }) => (
        <Accordian id={id} title={title} content={content} />
      ))}
    </div>
  )
}

export default App


