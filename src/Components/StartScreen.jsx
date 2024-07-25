import useProvider from "./hook/useProvider"

function StartScreen() {
    const { questions, dispatch } = useProvider();
    return (
        <div>
            <h2>Welcome the General questions prepared by yasub</h2>
            <h3>Are ready for {questions.length} questions!</h3>
            <button className="btn btn-ui" onClick={() => {dispatch({type: "start"})}}>Let's Start</button>
        </div>
    )
}

export default StartScreen
