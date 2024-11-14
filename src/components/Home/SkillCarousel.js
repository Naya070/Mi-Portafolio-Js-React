import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SkillCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <Container className="custom-container">
        <div className="skill-carousel-section">
          <p>
          <h3>Backend Developer en The Centria Group 🤖</h3>
          <br></br>
                    <ul>
                    <li>
                        <strong>Optimización de Procesos:</strong> Refactoricé y optimicé secciones críticas del código, mejorando el rendimiento del sistema en un 20% y reduciendo tiempos de respuesta de las APIs en un 30%.
                    </li>
                    <br></br>
                    <li>
                        <strong>Implementación de Nuevas Funcionalidades:</strong> Diseñé e implementé características clave utilizando TypeScript y NestJs, aumentando la eficiencia de los flujos de trabajo internos.
                    </li>
                    <br></br>
                    <li>
                        <strong>Calidad del Código:</strong> Apliqué principios SOLID y TypeORM en el desarrollo de aplicaciones, lo que resultó en un código más limpio y fácil de mantener.
                    </li>
                    <br></br>
                    <li>
                        <strong>Automatización de Pruebas:</strong> Implementé un conjunto robusto de pruebas unitarias y de extremo a extremo (E2E) con Jest y Postman, disminuyendo la tasa de errores en producción en un 15%.
                    </li>
                    </ul>
          </p>
        </div>
        </Container>

        <Container className="custom-container">
        <div className="skill-carousel-section">
          <p>
          <h3>Freelance Backend Developer 📄</h3>
          <br></br>
                    <ul>
                    <li>
                        <strong>Desarrollo de API Base:</strong> Construí la base de una API para un servicio de chats interactivos, logrando una estructura escalable y flexible para futuras integraciones..
                    </li>
                    <br></br>
                    <li>
                        <strong>Integración Eficiente:</strong> Logré una integración rápida y efectiva utilizando Docker, lo que permitió la portabilidad y la fácil configuración del entorno de desarrollo en diversos equipos.
                    </li>
                    <br></br>
                    <li>
                        <strong>Transformación de arquitectura monolítica a microservicios:</strong> Utilicé Nx para transformar el código ya creado de monolito a microservicios.
                    </li>
                    </ul>
          </p>
        </div>
        </Container>

        <Container className="custom-container">
        <div className="skill-carousel-section">
          <p>
          <h3>Full Stack Developer Freelance 👩‍💻</h3>
          <br></br>
                    <ul>
                    <li>
                        <strong>Mantenimiento de Interfaces:</strong> Realicé el mantenimiento y mejora de interfaces de usuario, logrando una navegación más fluida y optimizando el rendimiento general del sitio.
                    </li>
                    <br></br>
                    <li>
                        <strong>Optimización de APIs Rest:</strong> Desarrollé y mantuve APIs REST robustas para la gestión de datos, mejorando la comunicación entre el frontend y el backend en un 25%.
                    </li>
                    <br></br>
                    <li>
                        <strong>Desarrollo Ágil:</strong> Apliqué metodologías ágiles para entregar mejoras y nuevas funcionalidades de manera continua, con una retroalimentación positiva del cliente.
                    </li>
                    </ul>
          </p>
        </div>
        </Container>

        <Container className="custom-container">
        <div className="skill-carousel-section">
          <p>
          <h3>Software Developer en Servicios Topogeofísica 2025 C.A. ⚙️</h3>
          <br></br>
                    <ul>
                    <li>
                        <strong>Automatización de Procesos Empresariales:</strong> Desarrollé un software para la gestión empresarial que automatizó procesos administrativos, reduciendo el tiempo manual invertido en un 40%.
                    </li>
                    <br></br>
                    <li>
                        <strong>Implementación de Cálculos:</strong> Implementé algoritmos para el cálculo de la depreciación de equipos, reduciendo errores manuales y mejorando la precisión financiera.
                    </li>
                    <br></br>
                    <li>
                        <strong>Mantenimiento Eficiente del Sistema:</strong> Diseñé y mantuve bases de datos MySQL para la gestión eficiente de información crítica, aumentando la fiabilidad del sistema.
                    </li>
                    </ul>
          </p>
        </div>
        </Container>
      </Slider>
    </div>
  );
}

export default SkillCarousel;
