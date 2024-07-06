import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import CoffeeShop from "./pages/coffeeShop/CoffeeShop.jsx";
import Golflessons from "./pages/golf_lessons/Golflessons.jsx";
import Leagues from "./pages/leagues/Leagues.jsx";
import AdventureRange from "./pages/adventure_golf/AdventureRange.jsx";
import Toptracerrange from "./pages/toptracer_Range/Toptracerrange.jsx";

import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee" element={<CoffeeShop />} />
          <Route path="/lessons" element={<Golflessons />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/adventure" element={<AdventureRange />} />
          <Route path="/toptracer" element={<Toptracerrange />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
