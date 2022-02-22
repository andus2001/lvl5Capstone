import React, { useContext, useEffect } from "react"
import { ThemeContext } from "../themeContext.js"

import UserCard from "../components/UserCard.js"

function Profile(){
    const { cards, getCards } = useContext(ThemeContext)

    useEffect(() => {
        getCards()
    }, [])

    const renderUserCards = cards.map(card => (
        <UserCard {...card} key={card._id} />
    ))

    return(
        <div>
            <h1>This is the Profile page.</h1>
            <ul>
                {renderUserCards}
            </ul>
        </div>
    )
}

export default Profile