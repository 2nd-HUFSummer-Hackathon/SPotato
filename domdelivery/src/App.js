import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Match from "./pages/Match";
import MenuSelect from "./pages/MenuSelect";
import Pay from "./pages/Pay";
import Delivery from "./pages/Delivery";

const dummyData = [{}];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match" element={<Match />} />
          <Route path="/menuselect/:id" element={<MenuSelect />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
