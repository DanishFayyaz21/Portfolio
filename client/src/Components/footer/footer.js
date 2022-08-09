import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.scss";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillHeartFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";

// const scrollerStyle = {
//   bottom: 73,
//   width: "5%",
//   height: "10%",
//   right: 30,
//   borderRadius: "50px",
//   backgroundColor: "#9D2F2F",
//   cursor: "pointer",
//   color: "#fff",
//   fontSize: "16px",
//   padding: "0px",
//   boxShadow: "0px 3px 6px rgba(0,0,0,0.4)",
// };

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
