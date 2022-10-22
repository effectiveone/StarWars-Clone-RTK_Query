import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Films from "./pages/Films";
import Vehicles from "./pages/Vehicles"
import Char from "./pages/Char"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/people" element={<People />} />
          <Route path="/species" element={<Species />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/films" element={<Films />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/people/:id" element={<Char />} />        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;