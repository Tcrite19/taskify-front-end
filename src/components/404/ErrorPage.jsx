import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="dashboard-link" to="/">
          Home
        </Link>
            <div className="error-page-image">
            <img src="public/img/AdobeStock_189916326.jpeg" alt="404 error image" />
            </div>
      </div>
    </>
  );
};

export default ErrorPage;
