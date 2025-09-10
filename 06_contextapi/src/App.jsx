import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApiProvider } from './contextapi/ContextApi'
import Post from './contextapi/Post'
function App() {

  return (
    <>
  <ApiProvider>
    <Post/>
  </ApiProvider>
    </>
  )
}

export default App
