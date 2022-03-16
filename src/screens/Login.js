import React, {useContext, useEffect} from 'react'
import { ThemeContext } from '../themeContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login(){
    const { login, loginChange, array, setArray } = useContext(ThemeContext)
    
    useEffect(() => {
        axios.get("/userProfile")
        
        .then(res => {
            setArray(prevArray => [...prevArray, res.data])
                       
        })
    },[])

    

    const navigate = useNavigate()
    
    function handleSubmit(e){
        e.preventDefault()
        const usernames = array[0].map(element => element)
        console.log(usernames);
        const loginData = login.userName
        //filter out the 'array' to match loginData

        // get the users and verify that login matches one of the users (verifyLogin())
        //navigate("/profile")
    }
    function check(){
        
    }

    return(
        <div className='container' >
            <h1 id='heading' onClick={check}>SAFEKEEPER</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <br/>
                    <input
                        type="text"
                        name="userName"
                        value={login.userName}
                        onChange={loginChange}
                        placeholder="user name"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <br/>
                    <input
                        type="password"
                        name="password"
                        value={login.password}
                        onChange={loginChange}
                        placeholder="password"
                    />
                </div>
                <button className='loginBtn' >Login</button>
                <button className='signupBtn' onClick={() => navigate("/createuser")} >Sign Up</button>
            </form>
            
        </div>
    )
}

export default Login