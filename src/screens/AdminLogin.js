import React, {useContext} from "react"
import { ThemeContext } from '../themeContext'
import {useNavigate} from 'react-router-dom'


function AdminLogin(){
    const {login, setLogin, loginChange} = useContext(ThemeContext)
    const navigate = useNavigate()

    function submit(e){
        e.preventDefault()
        if(login.userName && login.password === "admin"){
            console.log(`successfully logged in`)
            setLogin({userName:'',password:''})
            navigate('/adminprofilepage')
        }else{
            alert(`please try again`)
            setLogin({
                userName:"",
                password:''
            })
        }
       
    }
    return(
        
        <div className="container">
            
            <h1 id='heading' >ADMIN LOGIN</h1>
        <form className="loginForm" onSubmit={submit}>
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
        </form>
        </div>
    )

}

export default AdminLogin