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
        <div className="homepage-image-container">
          <img
            src="public/img/AdobeStock_418746653.jpeg"
            alt="man overwhelmed with furniture assembly instructions"
          />
        </div>
      </div>
    </>
  );
};
export default Homepage;
