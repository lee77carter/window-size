import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <div className="App">
      <p>Window width: {windowWidth}px</p>
    </div>
  );
};

export default App;
