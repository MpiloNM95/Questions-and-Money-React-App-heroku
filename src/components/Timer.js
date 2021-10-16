/* It is suggested if you want to see these animations in the gameplay that you keep you mouse on your answer to if you got it right or not,
this only applies to the animations whether you want to see if your answer is correct or wrong in gameplay */

// Imported from react libraries using the following hooks useState and useEffect
import { useEffect, useState } from "react";

export default function Timer({ setStop, questionNumber }) {
    // This the variable for the timer of 30seconds using the useState hook
    let [timer, setTimer] = useState(30);

    // The 30second timer will decrease by 1second(1000) when the game has started for each question in the game
    // The setInterval and setTimer refer to the second that will get taken away/countdown from the 30seconds
    /* if(timer === 0) return setStop(true) = this means when the timer hits zero the setStop will take action which means 
    which means the game will be over and the user will be shown the the amount of money he/she has earned */
    /* return () => clearInterval(interval) = this will be used every time the useEffect is in motion, 
    so every time the questionNumber changes the 30second interval will be cleared and the countdown will start
    again for the users next question which means the timer will restart on the new question.
    This function is known as a clean out function */
    // The dependency are the setStop and the timer
    useEffect(() => {
        if(timer === 0) return setStop(true);
        let interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [setStop, timer]);

    // This for is for the setTimer of 30seconds for each new round/questionNumber the timer will restart
    // The dependency = [] is the questionNumber
    useEffect(() => {
        setTimer(30);
    }, [questionNumber])
    
    return timer;
}