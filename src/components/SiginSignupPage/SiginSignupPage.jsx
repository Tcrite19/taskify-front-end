import "./SiginSignupPage.css";

const SigninSignupPage = (props) => {
  return (
    <div className="login-signup-page" style={{ backgroundImage: `url(/images/high-angle-man-working-as-plumber.jpg)` }}>
      <div className="login-signup-card">
        <a href="/users/signin" className="login">
          Login
        </a>
        <a href="/users/signup" className="signup">
          Sign Up
        </a>
        <p className="p-text-margin">
          By signing up you agree to our <a href="/terms-of-use" className="link-text" alt="Terms of Use">Terms of Use</a> and <a href="/privacy-policy" className="link-text" alt="Privacy Policy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default SigninSignupPage;
