import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavigationBar from './pages/NavigationBar';
import Home from './pages/Home'
import Work from './pages/Work';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {
  return (
    
      <React.Fragment>
          <NavigationBar />
          <Home />
          <Work />
          <Education />
          <Projects />
          <Contact />
      </React.Fragment>
  
  )
}

export default App;
