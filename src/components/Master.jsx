import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../components/styles.css";

function Master() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleNavigate = (path) => {
        navigate(path, { state: { course: message } });
    };

    const goByUserChoice = () => {
        const page = message.toLowerCase().trim();

        if (page === "home") {
            handleNavigate("/home");
        } else if (page === "about") {
            handleNavigate("/about");
        } else if (page === "contact") {
            handleNavigate("/contact");
        } else {
            alert("Please enter valid page name (home / about / contact)");
        }
    };

    return (
        <>
            <div className="head">
                <Link to="/" state={{ course: message }}>Main</Link>{" | "}
                <Link to="/home" state={{ course: message }}>Home</Link>{" | "}
                <Link to="/about" state={{ course: message }}>About</Link>{" | "}
                <Link to="/contact" state={{ course: message }}>Contact</Link>

                <h1>This is the main page</h1>
            </div>

            <input
                type="text"
                placeholder="Enter page name (home / about / contact)"
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

            <button onClick={() => handleNavigate("/home")} className="glass-btn">
                Go to Home
            </button>

            <br /><br />

            <button onClick={() => handleNavigate("/about")} className="glass-btn">
                Go to About
            </button>

            <br /><br />

            <button onClick={() => handleNavigate("/contact")} className="glass-btn">
                Go to Contact
            </button>

            <br /><br />

            <button onClick={goByUserChoice} className="glass-btn">
                Navigate By User Input
            </button>
        </>
    );
}

export default Master;
