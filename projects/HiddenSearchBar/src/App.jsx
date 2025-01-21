import { useState } from 'react'
import HiddenSearchBar from './HiddenSearchBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div><HiddenSearchBar/></div>
  )
}

export default App
