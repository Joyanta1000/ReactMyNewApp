import Home from "./pages/home";
import Components from "./pages/components";
import Nav from "./pages/includes/nav";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
