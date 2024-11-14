import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BACKEND DEVELOPER",
          "FULL STACK DEVELOPER",
          "INGENIERA MECATRÓNICA",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
