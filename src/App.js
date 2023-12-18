import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
    };
    window.addEventListener("resize", windowResize);

    return () => window.removeEventListener(windowResize);
  }, []);

  return (
    <div className="App">
      <p>Window width: {windowWidth}px</p>
    </div>
  );
};

export default App;
