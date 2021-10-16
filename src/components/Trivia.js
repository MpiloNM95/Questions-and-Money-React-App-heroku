/* It is suggested if you want to see these animations in the gameplay that you keep you mouse on your answer to if you got it right or not,
this only applies to the animations whether you want to see if your answer is correct or wrong in gameplay */

// Imported the hooks from react the hooks are useState and useEffect
import React, { useEffect, useState } from 'react';
// Used "npm add use-sound" in the terminal
import useSound from 'use-sound';
// This is the sound you hear as soon as you press start button and timer counts down
import play from '../assets/play.mp3';
// This is the sound you hear when you get an answer correct
import correct from '../assets/correct.mp3';
// This is the sound you hear when you get an answer wrong
import wrong from '../assets/wrong.mp3';

// This is the default function which is being exported for the operations of the trivia questions
// This form as the props from the App.js in <Trivia />
// The data refers to the questions on the App.js 
// The setTimeOut refers to the amount of time the user will have to answer each of the questions
// The questionNumber refers to the what question the user is on eg 1 or id1 in App.js
/* The setQuestionNumber refers to what the question has been clicked based off, 
what number the user is on in relations to the money pyramid */
export default function Trivia({
    data, 
    setStop, 
    questionNumber, 
    setQuestionNumber
}) {
    // This the variable with the hook of useState for questions and setQuestions
    let [question, setQuestion] = useState(null);
    // This the variable with the hook of useState for selectedAnswer and setSelectedAnswer
    let [selectedAnswer, setSelectedAnswer] = useState(null);
    // This the variable with the hook of useState for className and setClassName
    let [className, setClassName] = useState("answer");
    // Whenever a user plays the game this is the sound the player will hear the "play" sound
    // Whenever a user gets a question right answer they will hear the "correct" sound
    // Whenever a user gets a question incorrect they will hear the "wrong" sound
    let [letsPlay] = useSound(play)
    let [correctAnswer] = useSound(correct)
    let [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        letsPlay()
    }, [letsPlay]);
    
    /* Whenever the interior component is [data, questionNumber]) the game will take data and then setQuestion,
    which in turn will set data array from App.js with questionNumber, 
    its - 1 as the useState on App.js is set to 1 which means, 
    if the user has to start with easier 1st question then in the number index 1 = 0,
    hence why we minus 1 here for the question number  */
    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    /* The delay is for when the answer has been answered the delay will allow the game in those 3seconds (3000),
    change and allow the user to go onto the next level for a different question    */
    let delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }

    /* This handleClick variable uses the a for the answer click by the user hence the setSelectedAnswer
    which will link itself to the onClick function in the return */
    /* The setClassName refers to the answers being picked which will mean the user has selected an answer 
    out of the possible answers which means the user wont be able to select another answer */
    /* Now in order to check if the answer clicked is correct or wrong we use the delay, 
    which will take about 3seconds (3000) to check through the setSelectedAnswer and the setClassName */
    /* Now the setClassName Will check if the a.correct from App.js and the user will either be returned the 
    phrase "answer correct" or "answer wrong" */
    /* The delay for 3seconds (3000) will run the animations for the question and
    possible 4 answer whether wrong or correct from the App.css */
    /* The delay for 6seconds (6000) after the we have determined that answer is correct will allow the user to 
    to level up when the answer is correct which then mean the user moves onto a new question with 4 new possible answers */
    let handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active")
        delay(3000, () => 
        setClassName(a.correct ? "answer correct" : "answer wrong")
        );
        delay(5000, () => 
            {
                if(a.correct){
                    correctAnswer();
                    delay(1000, () => {
                        setQuestionNumber((prev) => prev + 1);
                        setSelectedAnswer(null);
                    });
                } else {
                    wrongAnswer();
                    delay(1000, () => {
                        setStop(true);
                    });
                }
            }
        );

    }

    /* The {question?.question.map} have to use a ? in order for the code to run as,
    the useState has been set to null. Same applies for {question?.answers} */
    /* The .map is used to check if there will be a question or not and 
    then it will map through the answer for the user of the game */
    // The onClick function is for the answer that the user chooses in game 
    // The handleClick refers to which answer was selected by the user in game
    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"} 
                    onClick={() => handleClick(a)}>{a.text}
                    </div>
                ))}
            </div>
        </div>
    )
}