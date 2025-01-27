import { useState } from 'react'
import Testimonials from './Testimonials'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div><Testimonials/></div>
  )
}

export default App
