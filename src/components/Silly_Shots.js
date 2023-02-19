import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../config'
import { Link } from 'react-router-dom'
import "../style/shots_style.css"

export default function Silly_Shots() {
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"shots")
    let authenticated = localStorage.getItem("Authenticated")
    let email = ""
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
  return (
    <div>
        <h1>Post those Silly Things Which You Did Under Overload Today</h1>
        
        <Link to="/add-shots"><button className="add" id="addshots">+</button></Link>
        <div className="all_shots">


        {list.map((post) =>{
            return <div className="post">
                    <h2>{post.name}</h2>
                    <p>{post.content}</p>
                    
                </div>
            })}
        
        </div>
    </div>
  )
}

