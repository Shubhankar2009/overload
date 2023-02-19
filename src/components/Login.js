import React from 'react'
import {auth, provider} from '../config'
import {signInWithPopup} from 'firebase/auth'
import "../style/login_style.css"


export default function Login() {   
    

    let Authenticated = false
    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("Authenticated",true)
            Authenticated = true
            window.location.reload()
            const email = result._tokenResponse.email
            localStorage.setItem("email",email)
            const name = result._tokenResponse.displayName
            localStorage.setItem("name",name)

        })
    }
    
    return (
        <div className="login">
            <h1 className="sign_title">SIGN IN AND FIND A WAY TO GET RID OF OVERLOAD OF WORK</h1>
            <button className="btn" onClick={signInWithGoogle} variant="info">Sign In With Google</button>
        </div>
    )
}