import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImHeart } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! Gusto en conocerte, quiero hablarte un poco más de mí.
            Vivo en <span className="orange"> Guatire, Venezuela.</span>
            <br />Tengo 28 años y soy graduada de la Universidad Nacional Experimental 
            Politécnica "Antonio José de Sucre" como 
            <span className="orange"> ingeniera mecatrónica.</span>
            <br />
            <br />
            Algunas cosas que amo hacer a parte de programar son:
          </p>
          <ul>
            <li className="about-activity">
              <ImHeart /> Hacer senderismo.
            </li>
            <li className="about-activity">
              <ImHeart /> Tocar el violín.
            </li>
            <li className="about-activity">
              <ImHeart /> Leer.
            </li>
            <li className="about-activity">
              <ImHeart /> Dibujar.
            </li>
            <li className="about-activity">
              <ImHeart /> Patinar.
            </li>
          </ul>
          <i>
          <p style={{ color: "#178117" }}>
            "Comienza haciendo lo que es necesario, después lo que es posible y de repente estarás haciendo lo imposible"{" "}
          </p>
          <footer className="blockquote-footer">San Francisco de Asís</footer>
          </i>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
