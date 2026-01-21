import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../components/styles.css";

function Home() {
    const location = useLocation();

    useEffect(() => {
        alert(localStorage.getItem("msg"));
    }, []);

    const handlebtnclick = () => {
        localStorage.removeItem("msg");  
        alert("Storage cleared");
    };

    return (
        <>
            <div className="head">
                <Link to="/" state={{ course: "CSE1" }}>Main</Link>
                <Link to="/home" state={{ course: "CSE2" }}>Home</Link>
                <Link to="/about" state={{ course: "CSE3" }}>About</Link>
                <Link to="/contact" state={{ course: "CSE4" }}>Contact</Link>

                <h1>This is home page</h1>
            </div>

            <p>I'm belongs to --- {location.state?.course}</p>

            <button onClick={handlebtnclick} className="glass-btn">
                Clear Storage
            </button>
        </>
    );
}

export default Home;
