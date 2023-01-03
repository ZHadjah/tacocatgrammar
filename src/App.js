import "./App.css";
import Navbar from "./Navbar"
import Home from './pages/home'
import Code from './pages/code';
import Solve from './pages/solve';
import { Route, Routes } from 'prop-types'

function App() {     
    return (
      <>
           <Navbar />
           <div className="container">
              <Routes>
                <Route path="/"          element={<Home />} />
                <Route path="/code"      element={<Code />} />
                <Route path="/solve"     element={<Solve />} />
                <Route path="/github"    element="#" />
                <Route path="/portfolio" element="#" />
              </Routes>
           </div>
      </>
    )
}

export default App;
