import { useState } from 'react'
import Login from './Component/Login'
import Form from './Component/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Login/> */}
     <Form/>
    </>
  )
}

export default App
