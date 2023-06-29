import Navbar from "./NavBar";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
