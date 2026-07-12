import React from 'react'
interface Users{
  id:number;
  name:string;}
const Bbb = async() => {
 const res= await fetch("https://jsonplaceholder.typicode.com/users");
 const users:Users[] =await res.json();
  return (
    <div>
      <h1>users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
        <ul>
          {users.map(user=><li key={user.id}>{user.name}</li>)}
        </ul>
        </div>
  )
}

export default Bbb;