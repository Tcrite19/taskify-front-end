import Homepage from "../Homepage/Homepage";
import '../Homepage/Homepage.css';
import "./Landing.css";


const Landing = () => {
    return (
        <>
        <div className="landing-container">
            <img
                src="../../images/AdobeStock_516534949.jpeg"
                alt="two men carrying a couch" />
            <h1>Landing</h1>
            <p>Book a Task and get help Today!</p>
            <a href="/"><button className="dashboard-link">Get Started</button></a>
            </div>
            <Homepage />
        </>
    );
}

export default Landing