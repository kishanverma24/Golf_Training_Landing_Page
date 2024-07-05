import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdventureRange from "./pages/adventure_golf/AdventureRange.jsx";
import CoffeeShop from "./pages/coffeeShop/CoffeeShop.jsx";
import Golflessons from "./pages/golf_lessons/Golflessons.jsx";
import Leagues from "./pages/leagues/Leagues.jsx";
import Toptracerrange from "./pages/toptracer_Range/Toptracerrange.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adventuregolf" element={<AdventureRange />} />
          <Route path="/coffeeshop" element={<CoffeeShop />} />
          <Route path="/lessons" element={<Golflessons />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/toptracer" element={<Toptracerrange />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
