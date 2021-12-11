import React, {useState,useEffect} from 'react'
import axios from 'axios'
const UserList = () => {
const [listUsers, setlistUsers] = useState([])

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        console.log(res);
        setlistUsers(res.data);
        
    })
    .catch((err)=>{
        console.log(err);
       
    })
}, [])
    return (
        <div>
            <ul>
                {listUsers.map(user=>(
                    <div key={user.id}>
                    <li >{user.name}</li>
                    <li >{user.email}</li>
                    <li >{user.website}</li>
                    <li >{user.phone}</li>
                    <h1>...</h1>
                    </div>
                   
                )
                )
                }
            </ul>
        </div>
    )
}

export default UserList
