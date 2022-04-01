import React, { useContext } from "react"
import { ThemeContext } from "../themeContext.js"

function UserCard(props){
    // Change next line based on models Schema
    const { subscription, userName, password } = props

    console.log(props)

    return(
        <li
            //add css and delete next line
            style={{listStyle: "none"}}
        >
            <h1>{subscription}</h1>
            <div>
                <h3>Username: </h3>
                <p>{userName}</p>
            </div>
            <div>
                <h3>Password: </h3>
                <p>{password}</p>
            </div>
            <button>Edit</button>
        </li>
    )
}

export default UserCard