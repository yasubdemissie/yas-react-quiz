import useProvider from "./hook/useProvider";

function FinishScreen() {
  const { points, numberOfPoints, dispatch } = useProvider();
  return (
    <>
      <p className="result">
        You hace scored <b>{points}</b> out Of <b>{numberOfPoints}</b>
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        {" "}
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
