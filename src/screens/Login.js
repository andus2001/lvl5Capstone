import React, {useContext, useEffect} from 'react'
import { ThemeContext } from '../themeContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login(){
    const { login,setLogin, loginChange, array, setArray, setActiveProfile, activeProfile } = useContext(ThemeContext)
    
    useEffect(() => {
        axios.get("/userProfile")
        
        .then(res => {
            setArray(prevArray => [...prevArray, res.data])
                       
        })
    },[])

    //get one???
    function checkForProfile(uname){
        const selectedUser = array[0].filter(list => list.userName === uname.userName)
        const passwordMatcher = selectedUser.map(pass => pass.password) 
         
        if(passwordMatcher[0] === login.password) {
            setActiveProfile(selectedUser)
            console.log(activeProfile);
            navigate('/profile')
        }else{
            alert(`Incorrect username or password`)
            setLogin({userName:'', password:''})
        }
    
    }

    const navigate = useNavigate()
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(login);
        checkForProfile(login)
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