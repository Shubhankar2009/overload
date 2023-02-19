import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../config'
import { Link } from 'react-router-dom'
import "../style/shots_style.css"

export default function Help_Others() {
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"workload")
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
        <h1>Have Free Time ? Help Others In Completing Their Work</h1>
        
        <Link to="/get-help"><button className="add" id="addhelp">+</button></Link>
        <div className="all_shots">


        {list.map((post) =>{
            return <div className="post">
                    <h2>{post.name}</h2>
                    <p>FIELD : {post.field}</p>
                    <p>TASK : {post.work}</p>
                    <button id="do_help" onClick={()=>{
                        alert(`Contact On ${post.email}`)
                        }}>Help</button>
                </div>
            })}
        
        </div>
    </div>
  )
}
