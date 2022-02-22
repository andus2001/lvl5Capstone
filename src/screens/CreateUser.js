import React, {useContext} from 'react'
import { ThemeContext } from '../themeContext'
import {useNavigate} from 'react-router-dom'

function CreateUser(){
    const { user, createChange, createUser } = useContext(ThemeContext)
    
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        createUser()
        navigate("/")
    }

    return(
        <div>
            Create User Page
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <br/>
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={createChange}
                        placeholder="first name"
                    ></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <br/>
                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={createChange}
                        placeholder="last name"
                    ></input>
                </div>
                <div>
                    <label>Username:</label>
                    <br/>
                    <input
                        type="text"
                        name="userName"
                        value={user.userName}
                        onChange={createChange}
                        placeholder="user name"
                    ></input>
                </div>
                <div>
                    <label>Password:</label>
                    <br/>
                    <input
                        type="text"
                        name="password"
                        value={user.password}
                        onChange={createChange}
                        placeholder="password"
                    ></input>
                </div>
                <button className='registerBtn' >Register</button>
            </form>
        </div>
    )
}

export default CreateUser