import React from 'react';
import './i18n';
import './style/App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Experience from './Experience.js';
import Footer from './Footer.js';
import { ThemeProvider } from './ThemeContext.js';



function App() {
  const { t, i18n } = useTranslation();

  return (
      <ThemeProvider>
        <Nav />
        <Home />
        <About />
        <Experience />
        <Footer />
      </ThemeProvider>
  );
}

export default App;