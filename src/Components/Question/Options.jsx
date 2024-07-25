import useProvider from "../hook/useProvider";

// import { useState } from "react";
function Options() {
  const { answer, dispatch, question } = useProvider();
  //   console.log(question, userAnswer.has(index), index);
  // const isAnswered = userAnswer.has(index) ? true : false;
  return (
    <div className="options">
      {question.options.map((option, i) => {
        return (
          <button
            className={`btn btn-option ${answer === i ? "answer" : ""} ${
              answer !== null
                ? question.correctOption === i
                  ? "correct"
                  : "wrong"
                : ""
            }
            }`}
            key={option}
            disabled={answer !== null}
            onClick={() => {
              if (true) {
                dispatch({ type: "answer", payload: i });
              }
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
