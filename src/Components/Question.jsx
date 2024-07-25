import useProvider from "./hook/useProvider";

function Question({ children }) {
  const { question } = useProvider();
  return (
    <>
      <h3 className="question"> {question.question}</h3>
      <div className="options">
        {children}
      </div>
    </>
  );
}

export default Question;
