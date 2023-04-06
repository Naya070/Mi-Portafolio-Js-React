import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mokepon from "../../Assets/Projects/mokepon.png";
import todoapp from "../../Assets/Projects/todoapp.png";
import arepassion from "../../Assets/Projects/arepassion.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import geopulso from "../../Assets/Projects/geopulso.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="orange">Trabajos </strong> Recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí muestro algunos proyectos que he desarrollado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arepassion}
              isBlog={false}
              title="Are-Passion"
              description="Página web creada con Next.js para el frontend, Express para el backend, el gestor de dependencias yarn y el framework semantic ui para realizar diseños de interfaces. La página funciona como una tienda online en la cual se pueden hacer pedidos de los distintos tipos de arepas."
              ghLink="https://github.com/Naya070/Are-Passion-Store-con-Nextjs"
              demoLink="https://classy-tanuki-2ac4d3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="To-Do App"
              description="Aplicación de lista de tareas la cual permite agregar tareas, marcarlas como realizadas, eliminarlas y buscarlas mediante su nombre. Se realizó con react.js, HTML y CSS"
              ghLink="https://github.com/Naya070/To-Do-App"
              demoLink="https://naya070.github.io/curso-intro-react/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description="Esta página funciona como un comercio online, se creó utilizando react.js, HTML, SASS, babel y webpack. "
              ghLink="https://github.com/Naya070/Tienda-online-react"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geopulso}
              isBlog={false}
              title="Geopulso"
              description="Este programa fue creado utilizando Python para la api y otras partes de la lógica, Tkinter(framework de python) para la interfaz gráfica y MySQL para la base de datos. Es un software de escritorio para la gestión empresarial y el cálculo de la depreciación de los equipos geofísicos requerido por la empresa Servicios Topogeofísica 2025 C.A."
              ghLink="https://github.com/Naya070/geopulso"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mokepon}
              isBlog={false}
              title="Juego Mokepon"
              description="Juego realizado con javaScript, HTML, CSS y express.js"
              ghLink="https://github.com/Naya070/Mokepon-Game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
