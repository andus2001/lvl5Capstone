import React from 'react'

import { Routes, Route, Link } from 'react-router-dom'
import AdminLogin from './screens/AdminLogin'
import AdminProfilePage from './screens/AdminProfilePage'
import CreateUser from './screens/CreateUser'
import Error from './screens/Error'
import Login from './screens/Login'
import Profile from './screens/Profile'

export default function App(){
    return(
        <>
            <header>
            </header>
            <nav className='navbar'>
                <Link to='/'>Login</Link>
                <Link to='/createuser'>Sign Up</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/adminlogin'>Admin Login</Link>
            </nav>
            <Routes>
                <Route path='*' element={<Error />}/>
                <Route path='/' element={<Login />}/>
                <Route path='/createuser' element={<CreateUser />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/adminlogin' element={<AdminLogin />} />
                <Route path='/adminprofilepage' element={<AdminProfilePage />}/>
                
            </Routes>
            <footer>
            </footer>
        </>
    )
}