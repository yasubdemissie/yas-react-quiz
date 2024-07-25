import { useEffect, useState } from "react";
import useProvider from "./hook/useProvider";

const SEC_PER_QUESTION = 1;

function Timer() {
  const { numberOfQuestions,  dispatch } = useProvider();
  const [time, setTime] = useState(() => numberOfQuestions * SEC_PER_QUESTION);
  // Timer Effect
  useEffect(() => {
    if (time === 0) {
      dispatch({ type: "finish" });
      return;
    };
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
