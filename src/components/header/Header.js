import React from "react";
import "./Header.css";
import Headroom from "react-headroom";
import { greeting, workExperiences } from "../../portfolio";
import { Container } from "react-bootstrap";

function Header() {
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
    <Container>
      <header className="header" sticky="top">
        <a href="#" className="logo">
          <span className="grey-color"> &lt; </span>{" "}
          <span className="logo-name"> {greeting.username} </span>{" "}
          <span className="grey-color"> /&gt;</span>
        </a>{" "}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"> </span>{" "}
        </label>{" "}
        <ul className="menu">
        
        <li>
            <a href="#"> Home </a>{" "}
          </li>{" "}
          <li>
            <a href="#skills"> Skills </a>{" "}
          </li>{" "}
          <li>
            <a href="#portfolio"> Portfolio </a>{" "}
          </li>{" "}            
          
          <li>
            <a href="#contact"> Contact Me </a>{" "}
          </li>{" "}
        </ul>{" "}
      </header>{" "}
      </Container>
    </Headroom>
  );
}
export default Header;
