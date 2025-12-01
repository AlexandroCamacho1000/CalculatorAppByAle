import React from "react";
import '../stylesheets/Button.css'  // Make sure to rename the CSS folder/file if needed

// Button component for the calculator
function Button(props) {

  // Function to check if the button is an operator
  const isOperator = (value) => {
    return (
      isNaN(value) && value !== '.' && value !== '='
    );
  }

  return (
    <div 
      className={`button-container ${isOperator(props.children) ? 'operator' : null}`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
