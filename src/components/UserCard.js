import React, { useContext } from "react"
import { ThemeContext } from "../themeContext.js"

function UserCard(props){
    // Change next line based on models Schema
    const { subscription, userName, passWord } = props

    return(
        <li
            //add css and delete next line
            style={{listStyle: "none"}}
        >
            <h1>Subscription</h1>
            <div>
                <h3>Username: </h3>
                <p>someuser</p>
            </div>
            <div>
                <h3>Password: </h3>
                <p>somepass</p>
            </div>
            <button>Edit</button>
        </li>
    )
}

export default UserCard