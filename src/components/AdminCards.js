import React from "react";


function AdminCards(props){

    return(
        <div className="container">
            <h1 className="heading">{props.lastName}, {props.firstName} </h1>
            <h3 className="heading">{props.userName}</h3>
            <h3 className="heading">{props.password}</h3>
            <button>DELETE</button>
        </div>

    )
}

export default AdminCards