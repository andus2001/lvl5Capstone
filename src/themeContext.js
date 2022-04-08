import React, { useState } from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    const [login, setLogin] = useState({
        userName:"",
        password:""
    })
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        userName:"",
        password:""
    })

    const [cards, setCards] = useState([])
    
    const loginChange = e => {
        const { name, value } = e.target
        setLogin(prevLogin => ({
            ...prevLogin,
            [name]:value
        }))
    }
    
    const [activeProfile, setActiveProfile] = useState([])
   
    const [array, setArray] = useState([])
    
    const createChange = e => {
        const { name, value } = e.target
        setUser(prevUser => ({
            ...prevUser,
            [name]:value
        }))
    }
    
    const createUser = savedUser => {
        console.log(savedUser)
        axios.post("/userProfile", savedUser)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const getCards = () => {
        axios.get("/credentials")
            .then(res => setCards(res.data))
            console.log(cards)
            .catch(err => console.log(err))
    }

    return(
        <ThemeContext.Provider
            value={{
                login,
                setLogin,
                loginChange,
                // verifyLogin,
                user,
                setUser,
                createUser,
                createChange,
                cards,
                getCards,
                array,
                setArray,
                activeProfile,
                setActiveProfile
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }