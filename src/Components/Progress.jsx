import useProvider from './hook/useProvider';
function Progress() {
    const { index, points, numberOfQuestions, numberOfPoints, answer } = useProvider();
    return (
        <header className="progress">
            <progress max={numberOfQuestions} value={index + Number(answer !== null)} />
            <p>question: {index + 1} / {numberOfQuestions}</p>
            <p>points: {points} / {numberOfPoints}</p>
        </header>
    )
}

export default Progress
