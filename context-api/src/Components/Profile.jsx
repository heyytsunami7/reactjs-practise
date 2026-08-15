import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
   const {User} = useContext(UserContext)
   if(!User) return <h3>please enter details</h3>

   return <h3>Welcome back : {User.Username}</h3>
}

export default Profile