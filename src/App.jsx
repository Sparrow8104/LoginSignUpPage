import React from 'react'
import Register from './components/auth/register'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
       < Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App
