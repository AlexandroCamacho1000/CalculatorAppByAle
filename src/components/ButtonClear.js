import React from 'react';
import '../stylesheets/ButtonClear.css'; // Update folder/file name if needed

// Clear button component for the calculator
const ButtonClear = (props) => {
  return (
    <div 
      className='button-clear'
      onClick={props.handleClear}
    >
      {props.children}
    </div>
  );
}

export default ButtonClear;
