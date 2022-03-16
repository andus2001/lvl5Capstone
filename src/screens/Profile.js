import React, { useContext, useEffect } from "react"
import { ThemeContext } from "../themeContext.js"
import axios from 'axios'

import UserCard from "../components/UserCard.js"

function Profile(){
    const { activeProfile, setActiveProfile } = useContext(ThemeContext)

   

    const userComp = activeProfile.map(list => <UserCard key={list._id} 
        userName={list.userName} password={list.password} />)
    

    
        function check(){
            console.log(activeProfile);
        }
    return(
        <div>
            <h1 onClick={check}>This is the Profile page.</h1>
            {userComp}
            <ul>
                
            </ul>

        </div>
    )
}

export default Profile