import TacocatGrammar from "../images/TacocatGrammar.png";
import { useState } from "react";

function Solve() {
  const [input, setInput] = useState("");

  const isPalindrome = (e) => {
    e.preventDefault();

    let isPalindromeOutput = input;
    let lowerCaseInput,
      reversedString = "";

    if (input === "") {
      setInput(`❌Please enter a string of characters❌`);
    } else {
      lowerCaseInput = input.toLowerCase();
      reversedString = lowerCaseInput.split("").reverse().join("");
    }

    if (input === reversedString) {
      document.getElementById(
        "output"
      ).innerHTML = `🌮 ${isPalindromeOutput} is a palindrome!!😻`;
    } else {
      document.getElementById(
        "output"
      ).innerHTML = `❌ ${isPalindromeOutput} is NOT a palindrome😿`;
    }
  };

  return (
    <div className="row">
      <div className="col-md-8 offset-md-4 pt-5 pb-5 pr-3 pl-3">
        <img
          src={TacocatGrammar}
          alt="TacocatGrammarlogo"
          height={264}
          width={330}
        ></img>
      </div>
      <hr />

      <div className="row justify-content-center pt-3">
        <form
          className="col-md-4 justify-content-center"
          onSubmit={isPalindrome}
        >
          <div>
            <input
              value={input}
              required
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter Word"
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-md-3 pt-2">
              <button className="btn btn-primary form-control">Enter</button>
            </div>
          </div>
        </form>
      </div>

      <div className="row justify-content-center text-center pt-lg-5">
        <h3 id="output"></h3>
      </div>
    </div>
  );
}
export default Solve;
