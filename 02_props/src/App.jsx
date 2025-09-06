import { useState } from 'react'
import './App.css'
import Card from './Component/Card'

function App() {
  const userDetails = {
    name : "Prasanna",
    details : "Excited to be a web developer"
  }
  const userDetails1 = {
    name : "Himanshu",
    details : "Excited to be a QA Tester"
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Card details={userDetails}/>
      <Card details={userDetails1}/>
    </div>
  )
}

export default App
