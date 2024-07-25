import propTypes from 'prop-types';
function Progress({ index, point, numberOfQuestions, numberOfPoints, answer }) {
    return (
        <div className="progress">
            <progress max={numberOfQuestions} value={index + Number(answer !== null)} />
            <p>question: {index + 1} / {numberOfQuestions}</p>
            <p>points: {point} / {numberOfPoints}</p>
        </div>
    )
}

Progress.propTypes = {
    answer : propTypes.string,
}

export default Progress
