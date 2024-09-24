import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">

      <div className="midFooter">
        <h1>FARM EASY</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; FarmEasy</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="#">Instagram</a>
        <a href="#">Youtube</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
