import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../components/styles.css";

function Master() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const goHome = () => {
        navigate("/home", { state: { course: message } }); };

    const goAbout = () => {
        navigate("/about", { state: { course: message } }); };

    const goContact = () => {
        navigate("/contact", { state: { course: message } }); };

    const goByUserChoice = () => {
        const page = message.toLowerCase().trim();

        if (page === "home") {
            navigate("/home", { state: { course: message } });}
        else if (page === "about") {
            navigate("/about", { state: { course: message } });}
        else if (page === "contact") {
            navigate("/contact", { state: { course: message } });}
        else {alert("Please enter valid page name");}
    };
return (
        <>
            <div className="head">
                <Link to="/" state={{ course: message }}>Main</Link>
                <Link to="/home" state={{ course: message }}>Home</Link>
                <Link to="/about" state={{ course: message }}>About</Link>
                <Link to="/contact" state={{ course: message }}>Contact</Link>

                <br />
                <h1>This is the main page u know!!!!</h1>
            </div>

            <input
                type="text"
                placeholder="Enter Message OR Page Name"
                style={{
                    width: 400,
                    height: 100,
                    padding: 20,
                    color: "blue",
                    backgroundColor: "yellow",
                    fontSize: 20
                }}
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                    localStorage.setItem("msg", e.target.value);
                }}
            />

            <br /><br />

            <button onClick={goHome} className="glass-btn">
                Go to Home
            </button>

            <button onClick={goAbout} className="glass-btn">
                Go to About
            </button>

            <button onClick={goContact} className="glass-btn">
                Go to Contact
            </button>

            <br /><br />

            <button onClick={goByUserChoice} className="glass-btn">
                User's Choice
            </button>
        </>
    );
}

export default Master;