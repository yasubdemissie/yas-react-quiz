import { useEffect } from "react";

function Timer({ time, dispatch }) {

  // Timer Effect
  useEffect(() => {
    // if (time === 0) return;
    const timerId = setInterval(() => {
      dispatch({ type: "timer" });
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
