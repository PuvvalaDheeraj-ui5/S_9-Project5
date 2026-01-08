import { Link , useLocation } from "react-router-dom"
import { useState } from 'react'
import "../components/styles.css"

function Master() {
     const location = useLocation();
     const [message, setMessage]=useState("");
    return (
        <>
            <div className="head">
                <Link to="/" state={{course:message}}>Main</Link>
                <Link to="/home" state={{course:message}}>Home</Link>
                <Link to="/about" state={{course:message}}>About</Link>
                <Link to="/Contact" state={{course:message}}>Contact</Link>
                <br></br>
                <h1>This is the main page u know!!!!</h1>
                <input type="text" placeholder="Msg to destination page" name="textMsg"></input>
            </div>
            <input
               type="text"
                placeholder="Enter Message"
                style={{width:400,height:100,padding:10,borderRadius:10,fontWeight:"bold",fontFamily:TimeRanges,color:"blue",backgroundColor:"yellow",fontSize:20}}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
             
        </>
    )
}

export default Master