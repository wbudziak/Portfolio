import React, { useRef, useEffect } from "react";
import * as S from "./style";

const IconCarousel = () => {
  const skills = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  ];

  const graph = useRef(null);

  // Thanks mate ! https://codesandbox.io/s/circles-forked-y14s7d?file=/src/App.js:108-838

  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph.childNodes;

    let angle = 360 - 90;
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${
        ciclegraph.clientWidth / 2
      }px) rotate(-${angle}deg)`;
    }
  }, []);

  return (
    <S.CircleGraph className="circlegraph" ref={graph}>
      {skills.map((skill) => (
        <S.Circle key={skill} className="circle">
          <img src={skill} />
        </S.Circle>
      ))}
    </S.CircleGraph>
  );
};
export default IconCarousel;
