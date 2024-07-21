import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import TaskList from "../TaskList/TaskList";
import "../TaskList/TaskList.css";
import "./Dashboard.css";
const Dashboard = (props) => {
  return (
    <>
      <Link to="/dashboard">
        <h1>Dashboard</h1>
      </Link>

      <div className="dashboard-links">
        <Link className="dashboard-link" to="/">
          Home
        </Link>
        <Link className="dashboard-link" to="/account">
          Account
        </Link>
        <Link className="dashboard-link" to="/task/new">
          Add New Task
        </Link>
        <Link className="dashboard-link" to="/tasks">
          View Tasks
        </Link>
      </div>
      <div className="dashboard-content">
        <h2>Popular Projects</h2>
        <div id="dashboard-img-gallery">
          <div className="dashboard-img">
            <img
              src="public/img/AdobeStock_189916326.jpeg"
              alt="man assembling furniture"
            />
            <h3>Furniture Assembly</h3>
            <p>Projects starting at $47</p>
          </div>
          <div className="dashboard-img">
            <img
              src="public/img/robinson-greig-HrnAxAUwle8-unsplash.jpg"
              alt="men loading a truck"
            />
            <h3>Help Moving</h3>
            <p>Projects starting at $56</p>
          </div>
          <div className="dashboard-img">
            <img
              src="public/img/theme-photos-Klby0nxseY8-unsplash.jpg"
              alt="drill"
            />
            <h3>Home Repairs</h3>
            <p>Projects starting at $47</p>
          </div>
          <div className="dashboard-img">
            <img src="public/img/AdobeStock_320287361.jpeg" alt="drill" />
            <h3>Home Cleaning</h3>
            <p>Projects starting at $40</p>
          </div>
          <div className="dashboard-img">
            <img
              src="public/img/AdobeStock_718073342.jpeg"
              alt="man fixing a leaky faucet"
            />
            <h3>Plumbing Repairs</h3>
            <p>Projects starting at $67</p>
          </div>
          <div className="dashboard-img">
            <img
              src="public/img/AdobeStock_636880936.jpeg"
              alt="electrician fixing a circuit"
            />
            <h3>Electrical Help</h3>
            <p>Projects starting at $67</p>
          </div>
          <div className="dashboard-img">
            <img
              src="public/img/AdobeStock_516534949.jpeg"
              alt="men carrying a couch"
            />
            <h3>Heavy Lifting</h3>
            <p>Projects starting at $54</p>
          </div>
          <div className="dashboard-img">
            <img
              src="public/img/AdobeStock_593389323.jpeg"
              alt="gardener trimming shrubs"
            />
            <h3>Yard Word & Gardeing</h3>
            <p>Projects starting at $44</p>
          </div>
        </div>
      </div>

      <TaskList tasks={props.tasks} onClick={props.bookTask} />
    </>
  );
};
export default Dashboard;
