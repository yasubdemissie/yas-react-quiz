// import { useState } from "react";
function Options({ userAnswer, dispatch, question, index }) {
  //   console.log(question, userAnswer.has(index), index);
  // const isAnswered = userAnswer.has(index) ? true : false;
  return (
    <div className="options">
      {question.options.map((option, i) => {
        return (
          <button
            className={`btn btn-option ${userAnswer === i ? "answer" : ""} ${
              userAnswer !== null
                ? question.correctOption === i
                  ? "correct"
                  : "wrong"
                : ""
            }
            }`}
            key={option}
            disabled={userAnswer !== null}
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
