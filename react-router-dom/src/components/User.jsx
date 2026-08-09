import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const [data, setData] = useState(null)
    const [name , Setname] = useState();
   useEffect(()=>{
      fetch("https://api.github.com/users/heyytsunami7")
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.error('Failed to load user data:', error)
      })
   },[])
    
  return (
    <>
    <h1></h1>
     <img src={data?.avatar_url} alt={data ? `${data.login} avatar` : 'Loading avatar'} />
    </>
  )
}

export default User