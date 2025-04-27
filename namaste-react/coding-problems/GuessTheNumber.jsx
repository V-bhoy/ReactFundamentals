import React, { useState } from "react";

function GuessTheNumber() {
    const [target, setTarget] =
        useState(generateRandomNumber());
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState("");
    const [attempts, setAttempts] = useState(0);

    function generateRandomNumber(){
        return Math.floor(Math.random() * 100) + 1;
    }
    // Function to handle guess checking
    const handleGuess = () => {
        const num = parseInt(guess);
        if(isNaN(num) || num < 1 || num > 100){
            setFeedback("Please enter a number between 1 and 100.")
            return;
        }
        setAttempts((attempts)=>++attempts);
        if(num === target){
            setFeedback(`Congratualations! You guessed the number in ${attempts} attempts.`)
        }
        else if(num < target){
            setFeedback("Too low! Try again.");
        }
        else if(num > target){
            setFeedback("Too high! Try again.");
        }
    };

    // Function to reset the game
    const resetGame = () => {
        setTarget(generateRandomNumber());
        setGuess("");
        setFeedback("");
        setAttempts(0);
    };

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
            <h2>Guess the Number</h2>
            <input
                id="guess-input"
                type="number"
                value={guess}
                onChange={(e)=>setGuess(e.target.value)}
                placeholder="Enter a number between 1 and 100"
                style={{width:"300px",padding:"5px"}}
            />
            <div style={{display: "flex", gap: 10, margin: 20}}>
                <button onClick={handleGuess}>Check Guess</button>
                <button onClick={resetGame}>Reset Game</button>
            </div>
            <div>
                <p>{feedback}</p>
            </div>
        </div>
    );
}

export default GuessTheNumber;
