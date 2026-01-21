import { Link , useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/contact.css";
import profile from "../assets/profile.jpg";


function Contact() {
     const location = useLocation();

     useEffect(() => {
             alert(localStorage.getItem("msg"));      
         }, []);

    return (
        <>
            <div className="head">
                <nav className="nav">
                   <Link to="/" state={{course:"CSE1"}}>Main</Link>
                <Link to="/home" state={{course:"CSE2"}}>Home</Link>
                <Link to="/about" state={{course:"CSE3"}}>About</Link>
                <Link to="/Contact" state={{course:"CSE4"}}>Contact</Link>
                </nav>

                <h1>This is Contact Page</h1>
            </div>

            <div className="contact-container">
                <div className="contact-card">

                    <div className="photo-section">
                        
                        <img src={profile} alt="Profile" />

                    </div>

                    <div className="info-section">
                         <p>I'm belongs to ---{location.state?.course}</p>
                        <p><span>ID Number:</span> 2500030162</p>
                        <p><span>Name:</span> Dheeraj Mani Kumar</p>
                        <p><span>Phone:</span> 9347457540</p>
                        <p><span>Email:</span> dheeraj@gmail.com</p>
                        <p><span>Address:</span> Vijayawada , Andhra Pradesh</p>
                        <p><span>Department:</span> CSE</p>
                        <p><span>College:</span>KL UNIVERSITY</p>
                    </div>
                    {/* Message Box */}
        <div className="contact-card message-card">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
