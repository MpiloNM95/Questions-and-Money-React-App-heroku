/* It is suggested if you want to see these animations in the gameplay that you keep you mouse on your answer to if you got it right or not,
this only applies to the animations whether you want to see if your answer is correct or wrong in gameplay */

// Imported useRef hook from react Libraries
import { useRef } from "react"

export default function Start({setUsername}) {
    // This for the input area variable which requires user should enter his/her name/nickname
    let inputRef = useRef();
    // This is the simple variable which uses the inputRef
    let handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    }
    // This will return a "enter your name" area for the user 
    // This will also include a button called "Start" for the user to click to start the game
    // The button has an onClick function with handleClick props for the Start Button
    // The "ref={inputRef}" means the game will not start until the user has put in his/her name/nickname
    // So if you decide you want to click the start button without entering your name the game will not start until you do
    return (
        <div className="start">
            <input 
                placeholder="enter your name" 
                className="startInput" 
                ref={inputRef} 
            />
            <button className="startButton" onClick={handleClick}>Start</button>
        </div>
    )
}