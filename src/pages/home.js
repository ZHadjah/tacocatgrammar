import TacocatGrammar from "../images/TacocatGrammar.png";
import ReactLogo from "../images/ReactLogo.png";
import BootstrapLogo from "../images/BootstrapLogo.png";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="row d-flex justify-content-center pt-5">
      <div className="col">
        <div className="row justify-content-center">
          <img
            className="col-3 pt-4 pb-2"
            src={TacocatGrammar}
            alt="TacocatGrammarlogo"
            width={200}
            height={250}
          ></img>
        </div>

        <hr />
        <div className="row text-center d-flex justify-content-center">
          <div className="col-7 ">
            <h6>A palindrome is a word that has the same spelling forwards and backwards.</h6>

            <p>
               Enter a word and check if its a palindrome!
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <Link className="btn btn-primary" to="/solve">
              Check it Out
            </Link>
          </div>
        </div>

        <hr />

        <div className="row d-flex justify-content-center">
          <img
            className="col-3 "
            
            src={ReactLogo}
            alt="React"
            width={150}
            height={185}
          ></img>
          <img
            className="offset-1 col-3 "
            
            src={BootstrapLogo}
            alt="Badges"
            width={150}
            height={185}
          ></img>
        </div>
      </div>
    </div>
  );
}