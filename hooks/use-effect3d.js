import React, { useRef } from "react";

const useEffect3d = (props) => {
  const Element = useRef();

  let mouseX, mouseY;

  let transformAmount = props;

  function transformPanel(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX =
      Element.current.offsetLeft + Element.current.clientWidth / 2;

    const centerY =
      Element.current.offsetTop + Element.current.clientHeight / 2;

    const percentX = (mouseX - centerX) / (Element.current.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (Element.current.clientHeight / 2));

    Element.current.style.transition =
      "transform 0.1s ease 0s, opacity 0.1s ease 0s";

    Element.current.style.transform = `translate(-${
      percentX * transformAmount
    }%, ${percentY * transformAmount}%) rotateY(-10deg) scale(0.88, 0.83)`;
  }

  function handleMouseLeave() {
    Element.current.style.transition =
      "transform 0.3s ease 0s, opacity 0.3s ease 0s";
    Element.current.style.transform =
      "translate(-30px, 0%) rotateY(-12deg) scale(0.85, 0.82)";
  }

  return { Element, transformPanel, handleMouseLeave };
};

export default useEffect3d;
