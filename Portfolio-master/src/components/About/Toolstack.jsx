import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiJetbrains,
  SiAtom,
  SiWebstorm,
  SiReplit,
  SiLinkedin,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtom/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinkedin/>
      </Col>
    </Row>
  );
}

export default Toolstack;
