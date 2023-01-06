import "../styles/prism.css";

export default function Code(){
    return(
        <div className='row'>
            <div className='col pt-5'>
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
    ) 
}