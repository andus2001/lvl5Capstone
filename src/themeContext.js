import React, { useState } from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    const [login, setLogin] = useState({
        userName:"",
        password:""
    })
    
    const loginChange = e => {
        const { name, value } = e.target
        setLogin(prevLogin => ({
            ...prevLogin,
            [name]:value
        }))
    }

    // const verifyLogin = () => {
    //     axios.get("/userProfile")
    //         .then(res => {
    //             if res.data contains a user that matches login
    //             then navigate to profile.js
    //             else return an error wrong pass or user
    //         })
    // }

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        userName:"",
        password:""
    })
    
    const createChange = e => {
        const { name, value } = e.target
        setUser(prevUser => ({
            ...prevUser,
            [name]:value
        }))
    }
    
    const createUser = savedUser => {
        axios.post("/userProfile", savedUser)
            .then(res => {
                console.log(res.data)
                setUser({
                    firstName:"",
                    lastName:"",
                    userName:"",
                    password:""
                })
            })
            .catch(err => console.log(err))
    }
    
    const [cards, setCards] = useState([])

    const getCards = () => {
        axios.get("/credentials")
            .then(res => setCards(res.data))
            .catch(err => console.log(err))
    }

    return(
        <ThemeContext.Provider
            value={{
                login,
                setLogin,
                loginChange,
                user,
                createUser,
                createChange,
                cards,
                getCards
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }