/* It is suggested if you want to see these animations in the gameplay that you keep you mouse on your answer to if you got it right or not,
this only applies to the animations whether you want to see if your answer is correct or wrong in gameplay */

// Imported React libraries using the following hooks useEffect, useMemo, useState
import React, { useEffect, useMemo, useState } from 'react';
// The Trivia.js from components folder
import Trivia from './components/Trivia';
// The timer.js from the components folder
import Timer from './components/Timer';
// The Start.js from the components folder
import Start from './components/Start';
// Imported the styling for the app
import './App.css';


function App() {
  // This variable is for the user to set their name when playing the game 
  let [username, setUsername] = useState(null);
  /* This useState function is going allow the game and the user, 
  know if the question is answered correctly which question the user is answering */
  let [questionNumber, setQuestionNumber] = useState(1)

  // This variable is used to track the timer in the game while user is playing
  // The 30second timer will then countdown and when it has counted down the useState will set itself to true
  // Then the question which has been answered or un answered will disappear which will lead to 2 conclusions 
  // 1.) Either the user earns money of the pyramid of money for that question 
  // 2.) Or the game will be over for the user of the game
  let [stop, setStop] = useState(false);

  let [earned, setEarned] = useState("R 0");
  
  // These are the few questions I have made just to run through the game
  // The id = refers to the number of the question 
  // The Question = refers to the question which the user will be asked
  // The answers are in an array and each possible answer will be its an object
  // Out of the 4 possible answers there can only be 1 correct/true answer
  // The 15 questions have been setup below "Good luck dont Cheat"
  let data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the national emblem of Canada?",
      answers: [
        {
          text: "Maple Leaf",
          correct: true,
        },
        {
          text: "Brown Bear",
          correct: false,
        },
        {
          text: "Maple Syrup",
          correct: false,
        },
        {
          text: "Waffle",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "When you enter a situation without a definite plan of action, you are said to be \"playing it by\" what?",
      answers: [
        {
          text: "Fingertips",
          correct: false,
        },
        {
          text: "Ear",
          correct: true,
        },
        {
          text: "Mouth",
          correct: false,
        },
        {
          text: "Nose",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "An albino gorilla usually has what color fur?",
      answers: [
        {
          text: "Brown",
          correct: false,
        },
        {
          text: "Black",
          correct: false,
        },
        {
          text: "White",
          correct: true,
        },
        {
          text: "Golden",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "An electron volt is",
      answers: [
        {
          text: "The amount of energy it takes to move an electron through a potential difference of 1 volt",
          correct: true,
        },
        {
          text: "The number of volts it takes to move an electon a meter",
          correct: false,
        },
        {
          text: "The number of electrons it takes to kill a human being",
          correct: false,
        },
        {
          text: "The flux of current through a surface parallel to a capacitor",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "The ozone layer restricts",
      answers: [
        {
          text: "Visible light",
          correct: false,
        },
        {
          text: "Infrared radiation",
          correct: false,
        },
        {
          text: "X-rays and gamma rays",
          correct: true,
        },
        {
          text: "Ultraviolet radiation",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "The US declared war on which country after the bombing of Pearl Harbor?",
      answers: [
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which country is largest by area?",
      answers: [
        {
          text: "UK",
          correct: false,
        },
        {
          text: "USA",
          correct: false,
        },
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "When did Commander Robert Peary discover the North Pole?",
      answers: [
        {
          text: "1904",
          correct: false,
        },
        {
          text: "1905",
          correct: false,
        },
        {
          text: "1908",
          correct: true,
        },
        {
          text: "1909",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the name of the largest freshwater lake in the world?",
      answers: [
        {
          text: "Lake Union",
          correct: true,
        },
        {
          text: "Lake Superior",
          correct: false,
        },
        {
          text: "Lake Largest",
          correct: false,
        },
        {
          text: "Lake Goodwin",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Lime is sometimes applied to soil in order to",
      answers: [
        {
          text: "increase the alkalinity of the soil",
          correct: true,
        },
        {
          text: "increase the acidity of the soil",
          correct: false,
        },
        {
          text: "restore nitrates to the soil",
          correct: false,
        },
        {
          text: "make the soil more porous",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "The Habeas Corpus Act of 1679",
      answers: [
        {
          text: "states that no one was to be imprisoned without a writ or warrant stating the charge against him",
          correct: false,
        },
        {
          text: "provided facilities to a prisoner to obtain either speedy trial or release in bail",
          correct: false,
        },
        {
          text: "safeguarded the personal liberties of the people against arbitrary imprisonment by the king's orders",
          correct: false,
        },
        {
          text: "All of the Above",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "What is the S.I. unit of temperature?",
      answers: [
        {
          text: "Kelvin",
          correct: true,
        },
        {
          text: "Celsius",
          correct: false,
        },
        {
          text: "Centigrade",
          correct: false,
        },
        {
          text: "Fahrenheit",
          correct: false,
        },
      ],
    },
  ];

  // This variable here was created for the money pyramid in the game
  /* The moneyPyramid uses a hook called useMemo which is both for the performance of the game */
  // The id = in the equals the first question of the game and there are 15 questions in the game thats always changing difficulty
  // The amount = the amount of money a user stands to gain when they answer the question correctly
  /* The ".reverse()" = at thee end of the array basically means that the array objects will, 
  be flipped on the users screen and id:1 amount: "R 100" will be at the bottom instead of the top */
  // [] = refers to empty dependency as above it there is already an array inside the useMemo
  let moneyPyramid = useMemo(() => 
    [
      {id:1, amount: 'R 100'},
      {id:2, amount: 'R 200'},
      {id:3, amount: 'R 300'},
      {id:4, amount: 'R 500'},
      {id:5, amount: 'R 1000'},
      {id:6, amount: 'R 2000'},
      {id:7, amount: 'R 4000'},
      {id:8, amount: 'R 8000'},
      {id:9, amount: 'R 16000'},
      {id:10, amount: 'R 32000'},
      {id:11, amount: 'R 64000'},
      {id:12, amount: 'R 125000'},
      {id:13, amount: 'R 250000'},
      {id:14, amount: 'R 500000'},
      {id:15, amount: 'R 1000000'},
    ].reverse(),
   []
  ); 

  /* This useEffect is for when the player has got a question right and has earned some money, 
  then the message if the user gets a question wrong and loses then the game will show the user
  how much money user has earned. */
  // This will be updated while user is playing via the questionNumber the user is on in the game
  /* questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount) = 
  This basically means if the user is on question 7 and gets the question 7 wrong then the user will
  earn the amount he has from question 6 when the game is over hence the "questionNumber - 1).amount",
  from the variable hook with useEffect */
  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  /* Description for the Pyramid of the question number and the amounts for those questions */
  // This is the quiz game called "Who wants to be a millionaire"
  // Main refers to where the user will be asked the various questions
  // Money refers to where the user will see how much money is for grabs as well as the he has
  /* The {moneyPyramid.map(m)} uses a map function from javascript in order to use the array objects, 
  above in a simple and easier way rather than plotting each object in list */
  // The m = means the money per question
  /* <span className="moneyListItemNumber">{m.id}</span> = this means that each id (question), 
  will be returned within this span from the variable above */
  /* <span className="moneyListItemAmount">{m.amount}</span> = this means each amount (money), 
  will be returned within this span from the variable above */
  /* {questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} = This basically means that when a user,
  is playing the game he/she will be able to see what question their are on with the hook above of the useState which,
  means what ever question they are not on will not be highlighted with the active (teal color) */
  // data={data} = refers to the questions above from the data variable
  /* setStop={setStop} = refers to the variable which tracks the time which is 30 seconds which either,
  let the player to move up on money pyramid or end game */
  /* questionNumber={questionNumber} = refers to the useState function above, 
  which refers to which question number user is on */
  //  setQuestionNumber={setQuestionNumber} = refers to the which question number has been set for the user in gameplay
  /* The {stop ? (<h1>You earned: {earned}</h1> = this will show up when the game is over/stopped and
  will show the user how much they earned during the gameplay */
  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1> 
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber}/>
              </div>
            </div>
            <div className="bottom"> 
              <Trivia 
              data={data} 
              setStop={setStop} 
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              /> 
            </div>
          </>  
        )}  
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername} />}
    </div>
  );
}

export default App;
