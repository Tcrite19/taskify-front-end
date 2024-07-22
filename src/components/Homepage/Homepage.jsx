import { Link } from "react-router-dom";
import TaskList from "../TaskList/TaskList";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <div>
        <h1 className="tagline">Taskify: Quick Fixes, Expert Solutions.</h1>
        <h2>
          Helping you find and hire people within your profession to help with
          tasks at your home.
        </h2>
        <h3>Get help Today!</h3>
        <div className="homepage-image-container">
          <img
            src="public/img/AdobeStock_418746653.jpeg"
            alt="man overwhelmed with furniture assembly instructions"
          />
          <div className="dashboard-links">
            
            
            <Link className="dashboard-link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="dashboard-link" to="/tasks">
              Gift a Task 
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
