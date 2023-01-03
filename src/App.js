import "./App.css";
import Navbar from "./Navbar"
import Home from './pages/home'
import Code from './pages/code';
import Solve from './pages/solve';
import { Route, Routes } from 'react-router-dom'

function App() {     
    return (
      <div>
           <div className="container">
           <Navbar />
           

              <Routes>
                <Route path="/"          element={<Home />} />
                <Route path="/code"      element={<Code />} />
                <Route path="/solve"     element={<Solve />} />
                <Route path="/github"    element="#" />
                <Route path="/portfolio" element="#" />
              </Routes>
           </div>
      </div>
    )
}

export default App;
