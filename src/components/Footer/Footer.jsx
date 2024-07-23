import { FaArrowCircleUp } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-links">
        <div class="footer-link-list">
          <p class="footer-heading">
            <strong>Quick Links</strong>
          </p>
          <a href="/dashboard">
            <p class="footer-link">Dashboard</p>
          </a>
          <a href="/tasks">
            <p class="footer-link">Gift a Task</p>
          </a>
          <a href="/">
            <p class="footer-link"></p>
          </a>
          <a href="/">
            <p class="footer-link"></p>
          </a>
          <a href="/">
            <p class="footer-link"></p>
          </a>
        </div>
        <div class="footer-link-list">
          <a href="/signup">
            <p class="footer-heading">
              <strong>Join our Community</strong>
            </p>
          </a>
          <a href="/tasks">
            <p class="footer-link"></p>
          </a>
          <div class="footer-social">
            <a href="#">
            <FaGithubAlt />
            </a>
            <a href="#">
            <FaLinkedin />
            </a>
            <a href="#">
            <FaInstagram />
            </a>
          </div>
        </div>
        <div class="footer-link-list">
          <p class="footer-heading">
            <strong>Go to</strong>
          </p>
          <a href="/">
            <p class="footer-link">Home</p>
          </a>
          <a href="/signup">
            <p class="footer-link">Sign Up</p>
          </a>
          <a href="/login">
            <p class="footer-link">Log In</p>
          </a>
          <a href="/tasks">
            <p class="footer-link">Tasks</p>
          </a>
          <a href="/account">
            <p class="footer-link">Account</p>
          </a>
        </div>
      </div>

      <div class="footer-iconTop">
        <a href="/">
        <FaArrowCircleUp />
        </a>
      </div>
      <a href="https://github.com/AlejandraValdivia">
        <p class="footer-copyright">&copy; Taskify 2024</p>
      </a>
    </footer>
  );
};

export default Footer;
