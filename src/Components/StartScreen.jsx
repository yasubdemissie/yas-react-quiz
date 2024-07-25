function StartScreen({ num, status }) {
    return (
        <div>
            <h2>Welcome the General questions prepared by yasub</h2>
            <h3>Are ready for {num} questions!</h3>
            <button className="btn btn-ui" onClick={() => {status({type: "start"})}}>Let's Start</button>
        </div>
    )
}

export default StartScreen
