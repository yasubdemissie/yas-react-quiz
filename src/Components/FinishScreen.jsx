function FinishScreen({ point, total, dispatch }) {
  return (
    <>
      <p className="result">
        You hace scored <b>{point}</b> out Of <b>{total}</b>
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
