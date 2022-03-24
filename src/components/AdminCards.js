import React from "react";


function AdminCards(props){

    return(
        <div className="admin-container">
            <h1 className="admin-heading" >{props.lastName}, {props.firstName} </h1>
            <h3 className="admin-heading">{props.userName}</h3>
            <h3 className="admin-heading">{props.password}</h3>
            <button onClick={props.remove}>DELETE</button>
        </div>

    )
}

export default AdminCards