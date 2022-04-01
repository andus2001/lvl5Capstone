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
            <h1 className="heading">{subscription}</h1>
            <div>
                <h3 className="user-heading">Username:  </h3>
                <p className="user-content">{userName}</p>
            </div>
            <div>
                <h3 className="user-heading">Password: </h3>
                <p className="user-content">{password}</p>
            </div>
            <button onClick={props.handleEdit}>EDIT</button>
        </li>
    )
}

export default UserCard