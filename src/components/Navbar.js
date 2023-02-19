import React from 'react'
import { Link } from 'react-router-dom'
import "../style/navbar_style.css"

export default function Navbar() {
    
    
  return (
    <div className="navbar">
        <Link className="navbar_items" to="/">
            <div id="profile" className="profile"></div>
            <div className="nav_item_text" id="navitem_text1">Profile</div>
        </Link>
        <Link className="navbar_items" to="/silly-shots">
            <div id="shot" className="silly_shots"></div>
            <div className="nav_item_text" id="navitem_text2">Silly Shots</div>

        </Link>
        <Link className="navbar_items" to="/help-others">
            <div id="help" className="help"></div>
            <div className="nav_item_text" id="navitem_text3">Help Others</div>

        </Link>
        
    </div>
  )
}
