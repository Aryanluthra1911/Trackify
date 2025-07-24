import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Sales from './pages/Sales'
import GSTsales from './pages/GSTsales'
import Custom_bill from './pages/Custom_bill'
import Orders from './pages/Orders'


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
      </Routes>
    </div>
  )
}

export default App