import Landing from "./Landing/Landing.jsx";
import "../components/Landing/Landing.css";

const Signout = (props) => {
  const handleSignout = () => {
    props.signout();
    props.history.push("/users/signout");
  };
  return (
    <>
      <h1>Signout Successful</h1>
      <a href="/">
        <button className="dashboard-link">Browse Tasks</button>
      </a>
      <Landing />
    </>
  );
};

export default Signout;
