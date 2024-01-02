import React, { useState } from "react";

function Button({ children, click }) {
  const [isPressed, setIsPressed] = useState(true);

  // const handleClick = () => {
  //   setIsPressed(!isPressed);
  // };

  const buttonStyle = {
    backgroundColor: isPressed ? "green" : "red",
    color: "white",
    padding: "10px",
    cursor: "pointer",
  };

  return (
    <button
      className="button"
      onClick={() => {
        click();
        console.log(children);
        if (isPressed) {
          setIsPressed(false);
        }
      }}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}

export default Button;
