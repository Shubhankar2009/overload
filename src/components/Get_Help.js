import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../config'
import "../style/add_work_style.css"

export default function Get_Help() {

    const [field, setField] = useState("")
    const [work, setwork] = useState("")
    

    const email = localStorage.getItem("email")
    const authenticated = localStorage.getItem("Authenticated")
    const name = localStorage.getItem("name")

    const Login_redirect = () => {
        window.location.reload()
        window.location.pathname = "./"
    }

    const collection_ref = collection(db,"workload")
    const Sumbit =  async() =>{
        if (field !== "" & work !=="" ) {
            await addDoc(collection_ref, {field, work, name,email})
            window.location.reload()
            window.location.pathname('./help-other')
        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">Have A Lot Of Work To Do ? Take Help Of Others</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        <label>
                            <h5 className="input_label" >Your Work Is Related To Which Field :</h5>
                            <input className="input_form" type="text" placeholder="Your Work Is Related To Which Field"  onChange={(event)=>{setField(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label">What Is The Task : </h5>
                            <textarea className='textarea' name="" id="" cols="30" rows="30" onChange={(event)=>{setwork(event.target.value)}}></textarea>
                        </label>
       
                </div>
                        {authenticated? <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
                        </button>}
            </div>
        </div>
    )
}