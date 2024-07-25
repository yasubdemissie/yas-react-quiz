function NextBtn({ dispatch, index, numberOfQuestions }) {
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "next" });
        }}>
        {index + 1 === numberOfQuestions ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default NextBtn;
