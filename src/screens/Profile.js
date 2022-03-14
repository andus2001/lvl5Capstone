import React, { useContext, useEffect } from "react"
import { ThemeContext } from "../themeContext.js"

import UserCard from "../components/UserCard.js"

function Profile(){
    const { cards, getCards, user } = useContext(ThemeContext)

    // useEffect(() => {
    //     getCards()
    // }, [])

    const renderUserCards = cards.map(card => (
        <UserCard {...card} key={card._id}  />
    ))

    function checkMe(e){
        e.preventDefault()
        console.log(user)
    }

    return(
        <div>
            <h1>This is the Profile page.</h1>
            <button onClick={checkMe}>check me</button>
            <ul>
                {renderUserCards}
            </ul>
        </div>
    )
}

export default Profile