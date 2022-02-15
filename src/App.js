import React from 'react'
import Login from './Login'
import { Route, Switch} from 'react-router-dom'
import CreateUser from './CreateUser'
export default function App(){
    return(
        <div>
            <Login/>
            <Switch>
                <Route path="/" element={<Login/>}/>
                <Route path="createUser" element={<CreateUser/>} />
            </Switch>
            
        </div>
    )
}