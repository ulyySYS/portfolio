import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import MenuBurg from "./components/menuBurg";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home.js";
import Bookstore from "./components/project-pages/Bookstore.js";
import QuizApp from "./components/project-pages/QuizApp.js";
import WeatherApp from "./components/project-pages/WeatherApp.js";
import CountryApp from "./components/project-pages/CountryApp.js";
function App() {
  return (
    <div className="App">
      <HashRouter>
      <MenuBurg />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/project-quiz-app" element={<QuizApp />} />
          <Route path="/project-Bookstore" element={<Bookstore />} />
          <Route path="/project-weather-app" element={<WeatherApp />} />
          <Route path="/project-country-app" element={<CountryApp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
