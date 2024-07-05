import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import CoffeeShop from "./pages/coffeeShop/CoffeeShop.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee" element={<CoffeeShop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
