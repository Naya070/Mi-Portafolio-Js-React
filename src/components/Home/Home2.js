import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/developer_img.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              soy <b className="orange">ingeniera mecatrónica </b> 
              con un gran interés en el desarrollo de productos web. 
              <br />
              <br />Tengo conocimientos en lenguajes de programación como 
              <b className="orange"> JavaScript, Python, Java </b> 
              y también tengo experiencia en tecnologías de programación web como 
              <b className="orange"> HTML, CSS, React.js y Next.js</b>.
              <br />
              <br />Igualmente conozco y me desenvuelvo en la creación 
              y manipulación de<b className="orange"> base de datos relacionales</b>, 
              mediante el uso de las herramientas<b className="orange"> MySQL y SQLite</b>.
              <br />
              <br />Me encuentro particularmente entusiasmada con la posibilidad de trabajar con React para desarrollar aplicaciones modernas y escalables. 
              <br />
              <br />Espero ser considerada para formar parte de su proyecto, y me comprometo a aportar lo mejor de mí al equipo de desarrollo. Quedo atenta a recibir información acerca de su proyecto.
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
                  href="linkedin.com/in/nayarith-jiménez"
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
