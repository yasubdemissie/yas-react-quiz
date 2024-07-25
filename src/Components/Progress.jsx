function Progress({ index, point, numberOfQuestions, numberOfPoints, answer }) {
    return (
        <header className="progress">
            <progress max={numberOfQuestions} value={index + Number(answer !== null)} />
            <p>question: {index + 1} / {numberOfQuestions}</p>
            <p>points: {point} / {numberOfPoints}</p>
        </header>
    )
}

export default Progress
