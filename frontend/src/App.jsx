import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Sales from './pages/Sales'
import GSTsales from './pages/GSTsales'
import Custom_bill from './pages/Custom_bill'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Setting from './pages/Setting'
import Signup from './pages/Signup'


const App = () => {
  return (
    <div className='flex '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/gstsales' element={<GSTsales/>}/>
        <Route path='/custombills' element={<Custom_bill/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/setting'element={<Setting/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App