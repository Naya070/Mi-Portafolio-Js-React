import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/developer_img.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import SkillCarousel from "./SkillCarousel";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              TE INVITO A <span className="orange"> CONOCERME </span>
            </h1>
            <p className="home-about-body">
            <i>
              Mi nombre es <b className="orange">Nayarith Jiménez</b>, 
              soy <b className="orange">desarrolladora full stack </b> orientada al <b className="orange">backend</b>.
              <br />
              <br />En mis últimos trabajos me he desempeñado en el rol de <b className="orange">backend developer</b>, <br />
              utilizando una de mis tecnologías favoritas, <b className="orange">Node.js</b> con <b className="orange">Nest.js </b> 
              el cual permite crear servidores escalables y eficientes, con una arquitectura modular y combinado con <b className="orange">GraphQL</b>, 
              para realizar consultas más específicas de forma más sencilla. También trabajé con <b className="orange">TypeORM</b>, 
              <b className="orange"> Docker</b> y en menor medida con <b className="orange">Express</b> junto a <b className="orange">Inversify</b>.
              <br />
              <br /> Hacia el lado del <b className="orange">frontend</b>, tengo experiencia con <b className="orange">React.js</b>, 
              <b className="orange"> HTML</b>, <b className="orange">CSS</b> y otras herramientas como <b className="orange">Tailwind </b> 
              y librerías como <b className="orange">MaterialUI</b>.
              <br />
              <br />Igualmente me desenvuelvo en la creación 
              y manipulación de<b className="orange"> base de datos relacionales</b>, 
              mediante el uso de las herramientas<b className="orange"> PostgreSQL, MySQL y SQLite</b>.
              <br />
              <br />
              <br />
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="developer_image" />
            </Tilt>
          </Col>
        </Row>
        <SkillCarousel />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTÁCTAME</h1>
            <p>
              Le invito a <span className="orange">comunicarse</span> conmigo.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Naya070"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nayarith-jiménez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
