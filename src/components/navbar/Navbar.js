import React from "react";
import "./navbar.css"
import {HiDocument} from "react-icons/hi"


export default function Navbar(props){
    
    return(
        <>
        <nav className="header" style={{background: props.color}}>
            <div className="nav-wrapper">
                <div className="nav-link-wrapper left-side">
                    <p>Image Generator</p>
                </div>

                <p className="right-side signature">MARY AMARTEY </p>
                
            </div>
        </nav>
   
        <div className="navPrimary">
            <HiDocument style={{color:"blue",fontSize:"1.2rem", paddingTop:"0.05rem"}}/>
           <a href="https://mksportfolio.netlify.app" style={{color:"blue"}}>View Portfolio</a>
        </div>
        </>
    )
}