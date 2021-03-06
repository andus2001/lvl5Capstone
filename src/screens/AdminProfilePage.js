import React, {useContext, useEffect} from "react";
import { ThemeContext } from '../themeContext'
import { useNavigate} from 'react-router-dom'
import AdminCards from "../components/AdminCards";
import axios from 'axios'


function AdminProfilePage(){
    const navigate = useNavigate()
    const {array, setArray} = useContext(ThemeContext)
   function useThis(){  
       useEffect(() => {
        axios.get("/userProfile")
        //.then(res => res.json())
        .then(res => console.log(res.data))
    },[])}

    useThis()



    const adminComp = array[0].map(list => <AdminCards key={list._id} 
        firstName={list.firstName} lastName={list.lastName} 
        userName={list.userName} password={list.password}
        remove={()=>remove(list._id)} />)

    function remove(id){
        
        axios.delete(`/userProfile/${id}`)
        .then(res => {
            console.log(res.data)
            setArray(prevArray => prevArray.filter(item => item._id !== id))           
            
        })
        
        .catch(err => console.log(err))
    }

    function logOut(e){
        e.preventDefault()
        navigate('/')
    }
    function check(){
        console.log(array[0]);
    }

    return(
        <div className="container">
            
            <h1 className="heading" onClick={check}>PROFILES</h1>
            <div>
                {adminComp}
            </div>
            <button className="loginBtn" onClick={logOut}>Log Out</button>
        </div>
    )
}

export default AdminProfilePage