import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import "./style.scss";
const Share = () => {
  return (
    <div className="share">
      <p>Share:</p>
      <div className="social-logos">
        <a href="https://www.facebook.com/I.am.M.danish/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/danishfayyaz21/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/danishfayyaz21" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://github.com/DanishFayyaz21/" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Share;
