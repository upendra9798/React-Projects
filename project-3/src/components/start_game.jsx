import React, { useState } from 'react'
import Rules from './rules';

function Start_game() {
    const arrNumber = [1,2,3,4,5,6]
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] =useState()
    const [showRules, setShowRules] =useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    const roleDice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number");
            return;
        }
        const randomNumber =  generateRandomNumber(1,7) // 7 not included
        setCurrentDice(randomNumber)

        if (selectedNumber == randomNumber) {
            setScore((prev) => prev+randomNumber);
        }else{
            setScore((prev) => prev-2)
        }

        setSelectedNumber(undefined) // after every roll dice chose a number again
    }

    const resetScore = () => {
        setScore(0);
    }


    return (
        <div>
        <div className='navbar'>
            <div className='score'>
                <h1>{score}</h1>
                <h3>Total Score</h3>
            </div>

            <div className='select-number'>
            {/* {error && <p style={{ color: "red", fontSize: "14px", marginBottom: "5px" }}>{error}</p>} */}
            {/* {error ? <p className='error' style={{ color: "red", fontSize: "14px", marginBottom: "5px"  }}>{error}</p> : null} */}
            {/* Both work, but && is shorter and more readable when you don't need an "else" condition. */}
            <div className="error-container">
        {error && <p className='error'>{error}</p>}
    </div>
                   <div className='numbers'>
                   {arrNumber.map((value,i) => (
                    <button 
                    key={i}
                    onClick={() => {setSelectedNumber(value)
                        setError("") // Clear error when a number is selected
                    }}
                    style={{
                        backgroundColor: selectedNumber === value ? "black" : "white",
                        color: selectedNumber === value ? "white" : "black",
                    }}
                    >{value}</button>
/*key={i}- is the index of the element in arrNumber, making it a unique identifier.
{value} - This is JSX syntax that inserts the value from arrNumber inside the button.
Each button will display a number from arrNumber.*/
                   ))}
                   </div>
                   <div>
                    <h2>Select Number</h2>
                   </div>
            </div>
        </div>

        <div className='dice-roll container'>
            <div onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="dice" />
            </div>
            <h2>Click on Dice to roll</h2>
            <button className='reset-btn'
            onClick={resetScore}
            >Reset Score</button>
            <button onClick={() => setShowRules((prev) => !prev)}>
                {showRules ? "Hide" : "Show"} Rules
            </button>
        </div>
        {/* {showRules && <Rules />} */}
        {showRules && (
    <div className="rules-container">
        <Rules />
    </div>
        )}

        </div>
        
    )
}

export default Start_game
