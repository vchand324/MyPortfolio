import React from "react";
import CardComponent from "./card-component";
import Pro1 from "../assets/img/Pro1.jpg";
import Pro2 from "../assets/img/Pro2.jpg";
import Pro3 from "../assets/img/Pro3.jpg";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <div
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
      id="project"
    >
      <Fade left cascade>
        <section className="div-1">
          <h1 className="heading">Featured Projects..</h1>
          <div>
            {ProjectData.map((data, ind) => {
              const { github, external, img, title, text, skills } = data;
              return (
                <CardComponent
                  key={data + ind}
                  github={github}
                  external={external}
                  img={img}
                  title={title}
                  text={text}
                  skills={skills}
                />
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="https://github.com/vchand324"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="btn btn-outline-light"
              style={{ width: "fit-content" }}
            >
              More Projects
            </a>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Projects;

const ProjectData = [
  
  {
    title: "SortingAlgoVisualizer",
    img: Pro1,
    skills:
      "html, css, javascript, DSA",
    github: "https://vchand324.github.io/SortingAlgoVisualizer/",
    text: "Created a Graphical Visualisation of different sorting algorithm. It will help to differentiate between various sorting algo.",
    external: "",
  },
  {
    title: "FindingShotestPath",
    img: Pro2,
    skills: "React.js, css, html, javascript , DSA",
    github: "https://vchand324.github.io/FindingShotestPath/",
    text: "Designed and developed an app that find the shortest path between two point in a grid.",
    external: "",
  },
  {
    title: "Portfolio App",
    img: Pro3,
    skills: "React.js, html,css,javascript,bootstrap,hooks,routing",
    github: "",
    text: "A portfolio app designed to showcase and highlight a professional's work, skills, achievements, and experiences in a visually appealing and organized manner. ",
    external: "",
  },
];