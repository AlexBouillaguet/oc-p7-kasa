import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import About from './assets/pages/About/About';
import PropertyPage from './assets/pages/PropertyPage/PropertyPage';
import Error404 from './assets/pages/Error404/Error404';
import './assets/styles/App.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<PropertyPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
