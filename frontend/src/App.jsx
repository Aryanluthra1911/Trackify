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
import PrivateRoute from './components/PrivateRoute'


const App  = () => {
  return (
    <div className='flex '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path='/sales' element={<PrivateRoute><Sales/></PrivateRoute>}/>
        <Route path='/gstsales' element={<PrivateRoute><GSTsales/></PrivateRoute>}/>
        <Route path='/custombills' element={<PrivateRoute><Custom_bill/></PrivateRoute>}/>
        <Route path='/orders' element={<PrivateRoute><Orders/></PrivateRoute>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/setting'element={<PrivateRoute><Setting/></PrivateRoute>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App