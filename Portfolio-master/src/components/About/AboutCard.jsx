import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Orziboyev Muzaffar </span>
            from <span className="purple"> Andijan, Uzbekistan</span>
            <br />I am a junior pursuing MIT OPEN SOURCE in Maths and Computing in MIT
            UNIVERSITY.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> talking with girls 💁‍♀️
            </li>
            <li className="about-activity">
              <ImPointRight /> Solve the math problem
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muzaffar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
