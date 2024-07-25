import { useEffect, useState } from "react";

const SEC_PER_QUESTION = 4;

function Timer({ numberOfQuestions, dispatch }) {

  const [time, setTime] = useState(() => numberOfQuestions * SEC_PER_QUESTION);
  // Timer Effect
  useEffect(() => {
    // if (time === 0) return;
    const timerId = setInterval(() => {
      setTime(time => time - 1);
      if (time === 0) dispatch({ type: "finish" });
    }, 1000);

    return () => clearInterval(timerId);
  }, [dispatch, time]);

    return (
        <div className="timer">
            {`${Math.floor(time / 60)}`.padStart(2, 0)} : {`${time % 60}`.padStart(2, 0)}
        </div>
    )
}

export default Timer
