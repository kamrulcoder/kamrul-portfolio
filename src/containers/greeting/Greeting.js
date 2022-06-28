import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { useTypewriter} from 'react-simple-typewriter'

export default function Greeting() {

    const {text}= useTypewriter({
    words: ["Frontend Developer 👨‍💻","Computer Diploma Engineer 😃😃","Backend Developer 🧑‍💻"],
    loop: 0// Infinit
  })
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
             <p className="greeting-text-p subTitle">I'm a {text}</p>
              
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="man at desk"
              src={require("../../assets/images/man.svg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
