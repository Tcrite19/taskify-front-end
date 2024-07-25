import "./LoginSignupPage.css";

const LoginSignupPage = (props) => {
  return (
    <div className="login-signup-page" alt="man fixing a leaky faucet">
      <div className="login-signup-card">
        <a href="/users/login" className="login">
          Login
        </a>
        <a href="/users/signup" className="signup">
          Sign Up
        </a>
        <p className="p-text-margin">
          By signing up you agree to our Terms of Use and Privacy Policy.
        </p>
      </div>
    </div>
  );
};
export default LoginSignupPage;
