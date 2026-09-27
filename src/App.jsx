import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Cotolog from "./pages/cotolog";
import Contact from "./pages/contacts";
import Sub from "./pages/subscription";
import Oz from "./pages/oz";
import Opz from "./pages/opz";
import Otz from "./pages/otz";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cotolog" element={<Cotolog />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/subscription" element={<Sub />} />
      <Route path="/oz" element={<Oz />} />
       <Route path="/opz" element={<Opz />} />
        <Route path="/otz" element={<Otz />} />
    </Routes>
  );
}

export default App;