
import "./style.scss";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div id="footer">
      <div className="background">
        <div className="section">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="up-arrow"
          >
            <IoIosArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
