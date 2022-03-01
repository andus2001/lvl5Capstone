import React from 'react'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import CreateUser from './CreateUser'



export default function App(){
    return(
        <div>
            <Login/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="createUser" element={<CreateUser/>} />
            </Routes>
            
        </div>
    )
}