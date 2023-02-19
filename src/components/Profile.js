import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../config'

import {db} from '../config'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { useEffect , useState} from 'react'
import "../style/profile_style.css"
import "../style/shots_style.css"


export default function Profile() {
  

  const [list, setlist] = useState([])
  let name = localStorage.getItem("name")
  let email = localStorage.getItem("email")
  let authenticated = localStorage.getItem("Authenticated")
  const collection_ref = collection(db,"workload")
  const deletePost = async (id) =>{
    const postDoc = doc(db, "workload", id)
    await deleteDoc(postDoc)
}

  useEffect(() => {
    const getList = async () =>{
        const data = await getDocs(collection_ref);
        setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getList()
    
  })

 
  
  const signUserOut = () =>{
    signOut(auth).then(()=>{
    localStorage.clear()
    authenticated = false
    window.location.pathname = "/"
})} 

  return (
    <div>
      <div className="left">
        <h1>HI {name}</h1>
      </div>
      
      <h1>Moments When You Asked For Help :</h1>
      <div className="all_shots">

      {list.map((post) =>{
                if (email == post.email) {
                    return <div className="post">
                        <h2>{post.name}</h2>
                        <p>FIELD : {post.field}</p>
                        <p>TASK : {post.task}</p>
                        <button className='danger_btn' onClick={()=>{deletePost(post.id)}}>Delete</button>
                        
                    </div>
                }
            })}
      </div>



      <div className="danger">
        <button className='danger_btn' onClick={signUserOut}>Log Out</button>
      </div>
    </div>
  )
}