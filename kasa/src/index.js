import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import FicheLogement from './pages/Fiche-Logement/Fiche-Logement';
import About from './pages/About/About';
import Error404 from './pages/Error404/404';
import data from './logements.json';

const id = [];

data.forEach(element => {
  id.push(element.id);
});

console.log(id);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {id.map(routeId => (
          <Route
            key={routeId}
            path={`/fiche-logement/${routeId}`}
            element={<FicheLogement id={routeId} />}
          />
        ))}
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
