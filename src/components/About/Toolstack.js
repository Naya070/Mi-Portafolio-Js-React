import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiScrum } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiTrello,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Linux </h6>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> VS Code </h6>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Scrum </h6>
        <DiScrum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Trello </h6>
        <SiTrello />
      </Col>
    </Row>
  );
}

export default Toolstack;
