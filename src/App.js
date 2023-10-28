import './App.css';
// import Home from './Components/Home';
// import Navbar from './Components/Navbar';
// import About from './Components/About';
import React from 'react';

// code splitting => only for component
const Navbar = React.lazy(() => import('./Components/Navbar'))
const Home = React.lazy(() => import('./Components/Home'))
const About = React.lazy(() => import('./Components/About'))
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
