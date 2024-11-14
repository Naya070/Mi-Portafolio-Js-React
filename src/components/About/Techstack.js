import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiPython,
  DiGit,
  DiMysql,
  DiSass,
  DiSqllite,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiGraphql,
  SiTypeorm,
  SiPostgresql,
  SiDocker,
  SiJest,
  SiPostman,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h6> JavaScript </h6>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> TypeScript </h6>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Node.js </h6>
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Nest.js </h6>
        <SiNodedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Graphql </h6>
        <SiGraphql />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <h6> Typeorm </h6>
        <SiTypeorm />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <h6> Css </h6>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Html </h6>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h6> Sass </h6>
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> React </h6>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Next.js </h6>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Git/GitHub </h6>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Python </h6>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> PostgreSQL </h6>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> MySQL </h6>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> SQLite </h6>
        <DiSqllite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Docker </h6>
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Jest </h6>
        <SiJest />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6> Postman </h6>
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Techstack;
