import React from 'react';
import {Fade} from "react-reveal";

const About = () => {
    return (
      <div
        style={{ background: "#0b0b0d", color: "white" }}
        className="main-div"
        id="about"
      >
        <Fade left cascade>
        <section className="div-1 about">
          <h1 className="heading">About Me</h1>
          <div>
            <p className="text mt-4 mb-3">
              Hello! I'm Vishal, a software development enthusiast, competitive
              coder, and writer from India.
            </p>
            <p className="text my-3">
              I recently completed my Int Mtech in{" "}
              <span style={{ color: "#63c9c6" }}>
                Mathematics and Computing
              </span>{" "}
              from <span style={{ color: "#63c9c6" }}>IIT(ISM) Dhanbad</span>. I
              enjoy designing and creating beautiful web application / website
              and anything in between. I seek and enjoy stuff that challenges me
              and makes me think out of the box. My main goal is to be able to
              build useful, sleek, and efficient products.
            </p>
          </div>
          <p className="text mt-3">
            Here are few things where I am good at:
          </p>
          <div className="skills-box">
            <ul className="lists">
              {["Data Structures and Algorithms", "Node", "Express", "React"].map((text) => {
                return (
                  <li className="my-2 list-item" key={text}>
                    {text}
                  </li>
                );
              })}
            </ul>
            <ul className="lists">
              {["MongoDB", "SCSS", "Material UI", "SQL"].map((text) => {
                return (
                  <li className="my-2 list-item" key={text}>
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        </Fade>
      </div>
    );
}

export default About;
