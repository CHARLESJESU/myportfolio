import { useState } from 'react'
import Resume from './components/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Resume></Resume>
      </div>
   
    </>
  )
}

export default App
