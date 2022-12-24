import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gitSearch from "../../Assets/Projects/github search.png";
import wiki from "../../Assets/Projects/wiki.png";
import clock from "../../Assets/Projects/clock.png";
import react from "../../Assets/Projects/caravanareact.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitSearch}
              isBlog={false}
              title="Search github users"
              description="This project when we can use search github users. Wha"
              ghLink="https://github.com/M-Orziboyev"
              demoLink="https://m-orziboyev.github.io/Search-github-users/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wiki}
              isBlog={false}
              title="Wikipedia API"
              description="This is API Project"
              ghLink=""
              demoLink="https://m-orziboyev.github.io/wikipedia-api/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
