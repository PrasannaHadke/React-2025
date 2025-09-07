import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Counter from './Components/Counter.jsx'
import BgChanger from './Components/BgChanger.jsx'
import PasswordGenerator from './Components/PasswordGenerator.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Counter/>}/>
      <Route path='/bgchanger' element={<BgChanger/>}/>
      <Route path='/passwordgenerator' element={<PasswordGenerator/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}/>
  </StrictMode>,
)
