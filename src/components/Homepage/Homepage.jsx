import { Link } from "react-router-dom";
import TaskList from "../TaskList/TaskList";
import { FaScrewdriverWrench } from "react-icons/fa6";

import "./Homepage.css";
const Homepage = ({ bookTask }) => {
  return (
    <>
      <div className="homepage-container">
        <h1 className="tagline">Quick Fixes, Expert Solutions<FaScrewdriverWrench /></h1>
        <h2>
          Helping you find and hire people within your profession to help with
          tasks at your home.
        </h2>
        <h3 style={ { textDecoration: "underline"}}>Get help Today!</h3>
        <div className="homepage-image-container">

          <img className="homepage-image"
            src="public/img/AdobeStock_418746653.jpeg"
            alt="man overwhelmed with furniture assembly instructions"
          />
        </div>
        <div className="dashboard-links">
          <Link className="dashboard-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="dashboard-link" to="/tasks">
            Gift a Task
          </Link>
        </div>

        <div className="dashboard-content">
          <h2>Popular Projects</h2>
          <div id="dashboard-img-gallery">
            <div className="dashboard-img">
              <a
                href="/task/1/book"
                target="_blank"
                rel="noreferrer"
                bookTask={bookTask}
              >
                <img
                  src="public/img/AdobeStock_189916326.jpeg"
                  alt="man assembling furniture"
                />
              </a>
              <h3 className="dashboard-img-title">Furniture Assembly</h3>
              <p className="dashboard-img-desc">Projects starting at $49</p>
            </div>
            <div className="dashboard-img">
              <a
                href="/task/1/book"
                target="_blank"
                rel="noreferrer"
                bookTask={bookTask}
              >
                <img
                  src="public/img/robinson-greig-HrnAxAUwle8-unsplash.jpg"
                  alt="men loading a truck"
                />
              </a>
              <h3 className="dashboard-img-title">Help Moving</h3>
              <p className="dashboard-img-desc">Projects starting at $67</p>
            </div>
            <div className="dashboard-img">
              <a
                href="/task/1/book"
                target="_blank"
                rel="noreferrer"
                bookTask={bookTask}
              >
                <img
                  src="public/img/theme-photos-Klby0nxseY8-unsplash.jpg"
                  alt="drill"
                />
              </a>
              <h3 className="dashboard-img-title">Home Repairs</h3>
              <p className="dashboard-img-desc">Projects starting at $47</p>
            </div>
            <div className="dashboard-img">
              <a
                href="/task/1/book"
                target="_blank"
                rel="noreferrer"
                bookTask={bookTask}
              >
                <img src="public/img/AdobeStock_320287361.jpeg" alt="drill" />
              </a>
              <h3 className="dashboard-img-title">Home Cleaning</h3>
              <p className="dashboard-img-desc">Projects starting at $49</p>
            </div>
            <div className="dashboard-img">
              <a
                href="/task/1/book"
                target="_blank"
                rel="noreferrer"
                bookTask={bookTask}
              >
                <img
                  src="public/img/AdobeStock_718073342.jpeg"
                  alt="man fixing a leaky faucet"
                />
              </a>
              <h3 className="dashboard-img-title">Plumbing Repairs</h3>
              <p className="dashboard-img-desc">Projects starting at $74</p>
            </div>
            <div className="dashboard-img">
              <a
                href="/task/1/book"
                target="_blank"
                rel="noreferrer"
                bookTask={bookTask}
              >
                <img
                  src="public/img/AdobeStock_636880936.jpeg"
                  alt="electrician fixing a circuit"
                />
              </a>
              <h3 className="dashboard-img-title">Electrical Help</h3>
              <p className="dashboard-img-desc">Projects starting at $69</p>
            </div>
            <div className="dashboard-img">
              <a
                href="/task/1/book"
                target="_blank"
                rel="noreferrer"
                bookTask={bookTask}
              >
                <img
                  src="public/img/AdobeStock_516534949.jpeg"
                  alt="men carrying a couch"
                />
              </a>
              <h3 className="dashboard-img-title">Heavy Lifting</h3>
              <p className="dashboard-img-desc">Projects starting at $61</p>
            </div>
            <div className="dashboard-img">
              <a
                href="/task/1/book"
                target="_blank"
                rel="noreferrer"
                bookTask={bookTask}
              >
                <img
                  src="public/img/AdobeStock_593389323.jpeg"
                  alt="gardener trimming shrubs"
                />
              </a>
              <h3 className="dashboard-img-title">Yard Word & Gardeing</h3>
              <p className="dashboard-img-desc">Projects starting at $47</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
