import React, { useContext, useState } from "react"
import { ThemeContext } from "../themeContext.js"
import axios from 'axios'

import UserCard from "../components/UserCard.js"
import { useNavigate } from "react-router-dom"

function Profile(){
    const { activeProfile, setActiveProfile, array, setArray } = useContext(ThemeContext)
    const [ displayRule, setDisplayRule ] =useState('none')
    const [update, setUpdate] =useState({newUser:'',newPassword:''})
    const activeProfileID = activeProfile.map(profile => profile._id)

    const navigate = useNavigate()

    const userComp = activeProfile.map(list => <UserCard key={list._id} 
        userName={list.userName} password={list.password} handleEdit={toggleEdit} />)
    
        function handleChange(e){
            const {name, value} = e.target
            setUpdate(prevupdate => ({
                ...prevupdate, [name]:value
            }))
                
        }
    
        function check(){
            console.log(activeProfile);
        }
        function logOut(){
            setActiveProfile([])
            navigate("/")
        }
        function toggleEdit(){
            if(displayRule==='none'){
                setDisplayRule('block')
            }else{
                setDisplayRule('none')
            }
        }
        function handleSave(){
            
            const changes = {userName:update.newUser ,password: update.newPassword}
            axios.put(`/userProfile/${activeProfileID}`, changes)
            .then(res => {
                console.log(res.data)
                alert(`Please log back in`)
                logOut()
            })
                
            .catch(err=> console.log(err))
            
        }
    return(
        <div className="container">
            <h1 id="heading" onClick={check}>This is the Profile page.</h1>
            <div className="user-card">
                {userComp}
                <div className="edit" style={{display:displayRule}}>
                    <h3 className="user-heading">New Username:  </h3>
                    <input className="user-content" type='text' name="newUser" value={update.newUser} placeholder='new username' onChange={handleChange} />
                
                     <h3 className="user-heading">New Password: </h3>
                     <input className="user-content" type='text' name="newPassword" value={update.newPassword} placeholder='new password' onChange={handleChange}  />
                    <button className="loginBtn" onClick={handleSave}>SAVE</button>
                </div>

            </div> 
           
            <button id="logOutBtn" className="loginBtn" onClick={logOut} >Log Out</button>
    </div>
        
    )
}

export default Profile