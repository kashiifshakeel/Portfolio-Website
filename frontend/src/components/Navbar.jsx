import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className={style.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allUser">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* <li>
                <img src="../assets/Linkedin.png" alt="Visit My Linkedin Profile"/>
            </li>
            <li>
                <img src="../assets/Github.png" alt="Visit My Github Profile"/>
            </li>
            <li>
                <img src="../assets/Twitter.png" alt="Visit My Twitter Profile"/>
            </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
