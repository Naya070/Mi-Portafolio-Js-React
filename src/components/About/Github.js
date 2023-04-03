import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Días subiendo <strong className="orange">Código</strong> en Github
      </h1>
      <GitHubCalendar
        username="Naya070"
        blockSize={15}
        blockMargin={5}
        color="#f9844a"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
