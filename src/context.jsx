import { createContext, useEffect, useReducer } from "react";

const ContextProvider = createContext();

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
    case "timer":
      return {
        ...state,
        time: state.time - 1,
        status: state.time === 0 ? "finished" : "active",
      };
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
}

function Context({ children }) {
  const [{ questions, status, index, answer, points, time }, dispatch] =
    useReducer(reducer, initialState);

  const numberOfQuestions = questions.length;
  const numberOfPoints = questions.reduce(
    (sum, point) => sum + point.points,
    0
  );

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
    <ContextProvider.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        time,
        numberOfPoints,
        numberOfQuestions,
        dispatch,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export { Context, ContextProvider };
