import React, { useContext, useEffect } from "react"
import { ThemeContext } from "../themeContext.js"
import axios from 'axios'

import UserCard from "../components/UserCard.js"

function Profile(){
    const { array, setArray } = useContext(ThemeContext)

    useEffect(() => {
        axios.get("/userProfile")
        //.then(res => res.json())
        .then(res => {
            setArray(prevArray => [...prevArray, res.data])
                       
        })
    },[])

    const userComp = array[0].map(list => <UserCard key={list._id} firstName={list.firstName} lastName={list.lastName}
        userName={list.userName} password={list.password} />)
    

    

    return(
        <div>
            <h1>This is the Profile page.</h1>
            
            <ul>
                {userComp}
            </ul>
        </div>
    )
}

export default Profile