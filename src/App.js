import React, {useState} from 'react';
import './i18n';
import './style/App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Experience from './Experience.js';
import Footer from './Footer.js';
import { ThemeProvider } from './ThemeContext.js';



function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX,  y: e.clientY });
  };
  return (
    <div className='App' onMouseMove={handleMouseMove}>
      <ThemeProvider >
        <div
        className="circle"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
        <Nav />
        <Home />
        <About />
        <Experience />
        <Footer />
      </ThemeProvider>
      </div>
  );
}

export default App;