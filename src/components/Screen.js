import React from 'react';
import '../stylesheets/Screen.css'; // Update folder/file name if needed

// Screen component to display the calculator input
const Screen = ({ input }) => {
  return (
    <div className='screen'>
      {input}
    </div>
  );
}

export default Screen;
