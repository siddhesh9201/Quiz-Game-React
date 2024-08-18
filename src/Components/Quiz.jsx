import "./Quiz.css";
import { data } from "../../src/assets/data";
import { useState } from "react";
import React from "react";
import { useRef } from "react";

const Quiz = () => {
  let [index, setindex] = useState(0);
  let [question, setQuestion] = useState(data[index + 1]);
  let [lock, setLock] = useState(false);
  let [Marks, setMarks] = useState(0);
  let [isFinished, setIsFinished] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  let option_array = [Option1, Option2, Option3, Option4];

  const optionHandel = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setMarks(Marks + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const indexHandle = () => {
    setLock(false);
    document.querySelectorAll(".li").forEach((li) => {
      li.classList.remove("correct", "wrong");
    });

    if(index+1< data.length){
      const nextIndex= index+1;
      setindex(nextIndex);
      setQuestion(data[nextIndex]);

    }else{
      setIsFinished(true)
    }
  };

  return (
    <>
    { !isFinished?(
      <div className="quiz-container">
        <h1>QUIZ APP</h1>
        <hr />
        <h2 className=" question">
          {index + 1}.{question.question}
        </h2>
        <ul className="ul">
          <li
            ref={Option1}
            onClick={(e) => {
              optionHandel(e, 1);
            }}
            className="li"
          >
            {question.option1}
          </li>
          <li
            ref={Option2}
            onClick={(e) => {
              optionHandel(e, 2);
            }}
            className="li"
          >
            {question.option2}
          </li>
          <li
            ref={Option3}
            onClick={(e) => {
              optionHandel(e, 3);
            }}
            className="li"
          >
            {question.option3}
          </li>
          <li
            ref={Option4}
            onClick={(e) => {
              optionHandel(e, 4);
            }}
            className="li"
          >
            {question.option4}
          </li>
        </ul>
        <button onClick={indexHandle}>NEXT</button>
        <br /> <br />
        <div> {Marks} OF 5 QUESTION </div>
      </div>
    ):(
       <div class="result-window">
       
        <p class="result-message">Your result is ready!</p>
        <div className="marks-container">{Marks} OUT OF {data.length}</div>
        <div class="congrats-container">
        <div class="celebration">
  <div class="congrats-message">Congratulations!</div>
  <div class="confetti-container">
  
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
  </div>
</div>

 
</div>

  
</div>
    )
     }
    </>
  )
};
export default Quiz;
