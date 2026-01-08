import { Link , useLocation } from "react-router-dom"
import "../components/styles.css"

function Home() {
     const location = useLocation();
    return (
        <>
            <div className="head">
                <Link to="/" state={{course:"CSE1"}}>Main</Link>
                <Link to="/home" state={{course:"CSE2"}}>Home</Link>
                <Link to="/about" state={{course:"CSE3"}}>About</Link>
                <Link to="/Contact" state={{course:"CSE4"}}>Contact</Link>
                <br></br>
                <h1>This is home page</h1>
            </div>
             <p>I'm belongs to ---{location.state?.course}</p>
        </>
    )
}

export default Home