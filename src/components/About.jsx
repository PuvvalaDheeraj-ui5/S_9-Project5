import { Link , useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import "../components/styles.css"


function About() {
    const location = useLocation();

    useEffect(() => {
            alert(localStorage.getItem("msg"));      
        }, []);

    return (
        <>
            <div className="head">
              <Link to="/" state={{course:"CSE1"}}>Main</Link>
                <Link to="/home" state={{course:"CSE2"}}>Home</Link>
                <Link to="/about" state={{course:"CSE3"}}>About</Link>
                <Link to="/Contact" state={{course:"CSE4"}}>Contact</Link>
                <br></br></div>
                <h1>This is the about page u know!!!!</h1>
                 <p>I'm belongs to ---{location.state?.course}</p> 
                

           
        </>
    )
}

export default About