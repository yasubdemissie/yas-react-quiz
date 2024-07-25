import useProvider from "./Components/hook/useProvider";

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

function MainComponent() {
  const { status, answer } = useProvider();
  return (
    <div>
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "dataFailed" && <Errors />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question>
              <Options />
            </Question>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
      <Footer>
        {status === "active" && <Timer />}
        {answer !== null && <NextBtn />}
      </Footer>
    </div>
  );
}

export default MainComponent;
