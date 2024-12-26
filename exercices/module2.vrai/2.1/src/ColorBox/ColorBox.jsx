import { useState } from 'react';

const colors = ['red', 'green', 'blue', 'yellow', 'violet'];

function ColorBox() {
  const [colorIndex, setColorIndex] = useState(0);

  const handleColorChange = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const currentColor = colors[colorIndex];
  const nextColor = colors[(colorIndex + 1) % colors.length];

  return (
    <div style={{ backgroundColor: currentColor, width: '200px', height: '200px', padding: '10px', margin: '10px' }}>
      <button onClick={handleColorChange}>Next color: {nextColor}</button>
      <p>Current color: {currentColor}</p>
    </div>
  );
}

export default ColorBox;