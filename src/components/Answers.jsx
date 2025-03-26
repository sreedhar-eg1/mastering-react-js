import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswerRef = useRef();

  if (!shuffledAnswerRef.current) {
    shuffledAnswerRef.current = [...answers];
    shuffledAnswerRef.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswerRef.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              disabled={answerState !== ''}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
