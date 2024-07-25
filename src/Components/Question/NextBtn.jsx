import useProvider from "../hook/useProvider";

function NextBtn() {
  const { dispatch, index, numberOfQuestions, status } = useProvider();
  return (
    <div className={`${status === "finished" ? "invisible" : ""}`}>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "next" });
        }}
      >
        {index + 1 === numberOfQuestions ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default NextBtn;
