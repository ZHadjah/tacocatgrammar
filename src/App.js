import "../src/styles/App.css";
import Navbar from "./Navbar";
import Home from "./pages/home";
import Code from "./pages/code";
import Solve from "./pages/solve";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <Navbar
        githubLink='https://github.com/ZHadjah/tacocatgrammar'
        portfolioLink='https://zachhadjah.netlify.app/'
      />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/solve" element={<Solve />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
