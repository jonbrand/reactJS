import { useState } from 'react';

import './App.css';

function App() {
  const [clickedPoints, setClickedPoints] = useState([]);

  function screenCoordinates(e) {
    const { clientX, clientY } = e;

    setClickedPoints([...clickedPoints, { clientX, clientY }]);
  }

  return (
    <>
      <div className="App" onClick={screenCoordinates}>
        <button className='undo' onClick={''}>Undo</button>
        <button className='redo' onClick={''}>Redo</button>
        {clickedPoints.map((clickedPoint) => {
          return (
          <div 
            style={{
              left: clickedPoint.clientX -50, 
              top: clickedPoint.clientY -50,
              position: "absolute",
              borderRadius: "50%",
              background: "blue",
              width: "100px",
              height: "100px",
              animationName: 'fadeInOut',
              animationDuration: "10s",
              animationDelay: "2s"

            }}
          >
          </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
