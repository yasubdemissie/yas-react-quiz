import { useEffect, useReducer } from "react";
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import Loader from "./Components/Loader.jsx";
import Errors from "./Components/Error.jsx";
import StartScreen from "./Components/StartScreen.jsx";
import Question from "./Components/Question.jsx";
import Options from "./Components/Question/Options.jsx";
import NextBtn from "./Components/Question/NextBtn.jsx";
import Progress from "./Components/Progress.jsx";
import FinishScreen from "./Components/FinishScreen.jsx";
import Timer from "./Components/Timer.jsx";
import Footer from "./Footer.jsx";
import useProvider from "./Components/hook/useProvider.jsx";
import { Context } from "./context.jsx";
// import { map } from "leaflet";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  isCliked: false,
  points: 0,
};

function reducer(state, action) {

  switch (action.type) {
    case "dataFetched":
      return { ...state, questions: action.data, status: "ready" };
    case "dataFailed":
      return { ...state, status: "failed" };
    case "loading":
      return { ...state, status: "loading" };
    case "start":
      return {
        ...state,
        status: "active",
        points: 0,
        index: 0,
        answer: null,
        time: 180,
      };
    case "answer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? question.points + state.points
            : state.points,
      };
    case "next":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        status:
          state.index + 1 === state.questions.length ? "finished" : "active",
      };
    case "finish":
      return { ...state, status: "finished" };
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, time }, dispatch] =
    useReducer(reducer, initialState);

  const numberOfQuestions = questions.length;
  const numberOfPoints = questions.reduce(
    (sum, point) => sum + point.points,
    0
  );

  const c = useProvider();

  console.log(c);

  // Fetching Effect
  useEffect(() => {
    dispatch({ type: "loading" });
    fetch("http://localhost:8000/questions")
      .then((response) => {
        if (response.ok === false) throw new Error(response.status);
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "dataFetched", data: data, status: "ready" });
      })
      .catch((err) => dispatch({ type: "error", payload: err.message }));
  }, []);

  return (
    <>
      <div className="App">
        <Context>
          <Header />
        </Context>

        <Main>
          {status === "loading" && <Loader />}
          {status === "dataFailed" && <Errors />}
          {status === "ready" && (
            <StartScreen num={questions.length} status={dispatch} />
          )}
          {status === "active" && (
            <>
              <Progress
                answer={answer}
                numberOfPoints={numberOfPoints}
                numberOfQuestions={numberOfQuestions}
                index={index}
                point={points}
              />
              <Question data={questions} index={index}>
                <Options
                  userAnswer={answer}
                  dispatch={dispatch}
                  question={questions[index]}
                  index={index}
                />
                {answer !== null && (
                  <NextBtn
                    dispatch={dispatch}
                    index={index}
                    numberOfQuestions={numberOfQuestions}
                  />
                )}
              </Question>
            </>
          )}
          {status === "finished" && (
            <FinishScreen
              point={points}
              total={numberOfPoints}
              dispatch={dispatch}
            />
          )}
        </Main>
        <Footer>
          {status === "active" && <Timer numberOfQuestions={numberOfQuestions} dispatch={dispatch} />}
        </Footer>
      </div>
    </>
  );
}
