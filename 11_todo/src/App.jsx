import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import TodoApp from './Component/TodoApp'

function App() {

  return (
  <>
  <TodoProvider>
    <TodoApp/>
  </TodoProvider>
  </>
  )
}

export default App
