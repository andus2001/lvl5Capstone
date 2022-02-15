import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import CreateUser from './CreateUser'
export default function Login(){

    
    const [inputs, setInputs] = useState({userName:"",password:""})

    function handleChange(event){
        const {name, value} = event.target
        setInputs(prevInput => ({...prevInput, [name]:value}))
    }
    function handleSubmit(event){
        event.preventDefault()
        
        alert(`Username: ${inputs.userName} Password: ${inputs.password}`)
    }
    
    return(
        <div className='container'>
            <h1 id='heading'>SAFEKEEPER</h1>
            <form className='loginForm'>
            <input type="text" name="userName" value={inputs.userName}
            onChange={handleChange} placeholder="user name" /><br/>
                <input type="password" name="password" value={inputs.password}
            onChange={handleChange} placeholder="password" /><br/>
                <button className='loginBtn' onClick={handleSubmit}>Login</button><br/>
               <Link to='/createUser'> <button className='createBtn'>Create User</button>
                </Link>
            </form>
            
        </div>
    )
}