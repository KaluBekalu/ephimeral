import { useEffect, useState } from "react";

function App() {
  const [dragState, setDragState] = useState({
    x: 0,
    y: 0,
    offSet: { x: 10, y: 10 },
    isDragging: false,
  });

  useEffect(() => {
    console.log(dragState);
  }, [dragState]);

  return (
    <div
      onMouseMove={(e) => {
        if (!dragState.isDragging) return;
        setDragState({ ...dragState, x: e.clientX, y: e.clientY });
      }}
      onMouseUp={() => setDragState({ ...dragState, isDragging: true })}
      style={{ width: "100vw", height: "100vh", backgroundColor: "aliceblue" }}
    >
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: dragState.y - dragState.offSet.y,
          left: dragState.x - dragState.offSet.x,
        }}
      >
        <button
          onMouseDown={() => setDragState({ ...dragState, isDragging: false })}
          style={{
            cursor: dragState.isDragging ? "grabbing" : "grab",
          }}
        >
          Drag me
        </button>
        <p>Draggable Component</p>
        <p>IsDragging: {dragState.isDragging ? "True" : "False"}</p>
      </div>
    </div>
  );
}

export default App;
