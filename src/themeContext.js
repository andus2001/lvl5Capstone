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

    const verifyLogin = currentUser => {
        console.log("verifyLogin")
        let verifyAgainst = e.target.value
        axios.get(`/userProfile/search/userName?userName=${verifyAgainst.userName}`)
            .then((res, verifyAgainst) => {
                console.log(res.data)
                // if res.data contains a user that matches login
                // then setCards to usercredentials for that userprofile
                // else return an error wrong pass or user
                if(res.data.find(item => item.userName === verifyAgainst.userName)) {
                    setCards(verifyAgainst)
                    console.log("user is verified")
                } else {
                    setCards([])
                    console.log("user not found")
                }
            })
            .catch(err => console.log(err))
    }
    
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
            })
            .catch(err => console.log(err))
    }

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
                verifyLogin,
                user,
                setUser,
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