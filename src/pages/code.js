import "../styles/prism.css";

export default function Code() {
  return (
    <>
      
      <div className="row pt-5 pb-4">
        <div className="row">
          <div className="col">
            <h3>React Bootstrap</h3>
          </div>
        </div>
        <div className="row">
        <div className="col pt-1">
          <pre className="language-javascript" tabIndex={0}>
            <code className="language-javascript">
              {`
                package.json:

                "name": "tacocat_grammar_react",
                "version": "0.1.0",
                "private": true,
                "dependencies": {
                  "react-bootstrap": "^2.7.0",
                },        
            `}
            </code>
          </pre>
        </div>
        </div>
    
      </div>

      <div className="row pb-4">
      <div className="row">
          <div className="col">
            <h3>Routing</h3>
          </div>
        </div>
        <div className="row">
        <div className="col pt-1">
          <pre className="language-javascript" tabIndex={0}>
            <code className="language-javascript">
              {`
                App.js:

                import Navbar from "./Navbar";
                import Home from "./pages/home";
                import Code from "./pages/code";
                import Solve from "./pages/solve";
                import { Route, Routes } from "react-router-dom";                
                
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
                ____________________________________________________________________
                
                Navbar.js:

                import { Link, useMatch, useResolvedPath } from "react-router-dom";

                export const openInNewTab = (url) => {
                    window.open(url, "_blank");
                  };

                function Navbar({ githubLink, portfolioLink }) {
 
                    //hamburger icon for responsive layout
                    const [clicked, setClicked] = useState(false);
                    function handleClick() {
                      setClicked(!clicked);
                    }
                  
                    //navbar component
                    return (
                      <nav id={\`\${sticky ? "sticky" : ""}\`} className="nav">
                        <Link>TacocatGrammar</Link>
                  
                        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                          <CustomLink to="/">🌮Home</CustomLink>
                          <CustomLink to="/solve">🌮Solve</CustomLink>
                          <CustomLink to="/code">🌮Code</CustomLink>
                          <Link
                            id="githubLink"
                            githubLink={githubLink}
                            onClick={() => openInNewTab(githubLink)}
                          >
                            🌮Github
                          </Link>
                          <Link
                            id="portfolioLink"
                            portfolioLink={portfolioLink}
                            onClick={() => openInNewTab(portfolioLink)}
                          >
                            🌮Portfolio
                          </Link>
                        </ul>
                        <div id="mobile">
                          <i
                            id="bar"
                            className={clicked ? "fas fa-times" : "fas fa-bars"}
                            onClick={() => handleClick()}
                          ></i>
                        </div>
                      </nav>
                    );
                  }

                  const CustomLink = ({ to, children, ...props }) => {
                    const resolvedPath = useResolvedPath(to);
                    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
                  
                    return (
                      <li className={isActive ? "active" : ""}>
                        <Link to={to} {...props}>
                          {children}
                        </Link>
                      </li>
                    );
                  };
                  export default Navbar;                
            `}
            </code>
          </pre>
        </div>
        </div>
        
      </div>

      {/* <div className="row">
      <div className="row">
          <div className="col">
            <h3>Responsive Navbar</h3>
          </div>
        </div>
        <div className="col pt-5">
          <pre className="language-javascript" tabIndex={0}>
            <code className="language-javascript">
              {`
                Navbar.js:
                
                import { useEffect, useState } from "react";

                function Navbar({ githubLink, portfolioLink }) {

                    //sticky navbar
                    const [sticky, setSticky] = useState(false);
                  
                    useEffect(() => {
                      const handleScroll = () => {
                        setSticky(window.scrollY > 200)
                      }
                      window.addEventListener('scroll', handleScroll)
                      return () => window.removeEventListener('scroll', handleScroll)
                    })  
                  
                  
                    //hamburger icon for responsive layout
                    const [clicked, setClicked] = useState(false);
                    function handleClick() {
                      setClicked(!clicked);
                    }

                    *****NOT FINSIHED******
                    *****NOT FINSIHED******
                    *****NOT FINSIHED******
                    *****NOT FINSIHED******

                    *****NOT FINSIHED******

            `}
            </code>
          </pre>
        </div>
      </div> */}

      <div className="row pb-4">
        <div className="row">
          <div className="col">
            <h3>Palindrome Algorithm</h3>
          </div>
        </div>
        <div className="row">
        <div className="col pt-5">
          <pre className="language-javascript" tabIndex={0}>
            <code className="language-javascript">
              {`
                            import TacocatGrammar from "../images/TacocatGrammar.png";
                            import { useState } from "react";
                            
                            function Solve() {
                            const [input, setInput] = useState("");
                            
                            const isPalindrome = (e) => {
                                e.preventDefault();
                            
                                let isPalindromeOutput = input;
                                let lowerCaseInput, reversedString = ""
                                if (input === "") {
                                    setInput('❌Please enter a string of characters❌')
                                } else {
                                    lowerCaseInput = input.toLowerCase();
                                    reversedString = lowerCaseInput.split("").reverse().join("");
                                }
                                
                                if(input === reversedString){
                                    document.getElementById("output").innerHTML =
                                    '🌮 \${isPalindromeOutput} is a palindrome!!😻'
                                }else{
                                    document.getElementById("output").innerHTML =
                                    '❌ \${isPalindromeOutput} is NOT a palindrome😿'
                                }
                            }
                        `}
            </code>
          </pre>
        </div>
        </div>
        
      </div>
    </>
  );
}
