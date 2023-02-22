import React, {useState , useEffect} from 'react'
import  {db } from './firebase'
import './App.css'
import  {collection , getDocs , addDoc , doc, updateDoc, deleteDoc } from 'firebase/firestore'
const App = () => {

  const [name , setName ] = useState('')
  const [des, setDes ] = useState('')
  const [age , setAge ] = useState(0)
  const [users , setUsers ] = useState([])
  
// declaring user Reference 
  const usersReference = collection(db ,"users")

 // Connecting with databse 
 useEffect(()=>{
const getUsers = async ()=>{
     const data  = await  getDocs(usersReference)
    setUsers(data.docs.map((user)=>({...user.data(), id:user.id})))
}
  getUsers()
 }, [])


  //createing users 
  
   const getNewUsers = async () =>{
      await addDoc(usersReference, {name:name , age:Number(age), description:des})
      setName('')
      setAge('')
      setDes('')
} 

//increasing age 
const updateUsers = async(age , id ) =>{
  const newUser = doc(db, "users", id)
  const updatedUser = {age:age+1}
  await updateDoc(newUser, updatedUser) 
}

//Deleting user
const deleteUser = async (id) =>{
  const deletedUser = doc(db,  "users" , id )
  await deleteDoc(deletedUser)
}

  return ( 
    <div className='App'>
      <p>//Note : After created Refresh the page </p>
      <input placeholder='name..'
       onChange={e=>setName(e.target.value)}
         className='box name '
         required={true}
       />
   
      <input placeholder='age...'
       onChange={e=>setAge(e.target.value)}
       className='box age '
       />
     
      <textarea onChange={e=>setDes(e.target.value)}
       placeholder='description'
         className='box des '
       />

     
      <button onClick={getNewUsers} className='btn user '>Create a user</button>
      {users.map((user)=>
      <div key={user.id} className='createdBox'>
      
        <h3 className='username '>Name:{user.name} </h3>
        <h3 className='userage'> Age: {user.age}</h3>
        <p className='userDes'>Description:{user.description}</p>
       <button onClick={()=>updateUsers( user.age , user.id  )} className='btn increase'>Increase age by one </button>
        <button onClick={()=>deleteUser( user.id  )} className='btn delete'>Delete user</button>

        </div>
      )}
    </div>
  )
}

export default App