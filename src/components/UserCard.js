import React, { useContext } from "react"
import { ThemeContext } from "../themeContext.js"

function UserCard(props){
    // Change next line based on models Schema
    

    return(
        <li
            //add css and delete next line
            style={{listStyle: "none"}}
        >
            <h1 className="heading">{props.firstName} {props.lastName}</h1>
            <div>
                <h3 className="user-heading">Username:  </h3>
                <p className="user-content">{props.userName}</p>
            </div>
            <div>
                <h3 className="user-heading">Password: </h3>
                <p className="user-content">{props.password}</p>
            </div>
            <button>Edit</button>
        </li>
    )
}

export default UserCard