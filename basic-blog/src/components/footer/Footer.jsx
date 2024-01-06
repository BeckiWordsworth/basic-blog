import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contact</h2>
          <span>Email: bloggyMcBlogface@hello.com</span>
          <span>Phone: +56732468232</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Location: Stockholm</span>
          <span>PCountry: Sweden</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
