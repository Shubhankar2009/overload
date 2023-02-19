import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../config'
import "../style/add_style.css"

export default function Add_Shots() {

    const [content, setContent] = useState("")

    const email = localStorage.getItem("email")
    const authenticated = localStorage.getItem("Authenticated")
    const name = localStorage.getItem("name")

    const Login_redirect = () => {
        window.location.reload()
        window.location.pathname = "/"
    }

    const collection_ref = collection(db,"shots")
    const Sumbit =  async() =>{
        if (content !== "" ) {
            await addDoc(collection_ref, {content,name,email})
            window.location.reload()
            window.location.pathname = "/silly-shots"

        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">What Silly Thing You Did Under Pressure Today ?</h1>
                <div className="inputs_parent">
                    <textarea className='textarea' name="" id="" cols="30" rows="30" onChange={(event)=>{setContent(event.target.value)}}></textarea>
    
                </div>
                        {authenticated? <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
                        </button>}
            </div>
        </div>
    )
}