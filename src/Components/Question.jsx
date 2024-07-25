function Question({ data, index, children }) {
  return (
    <>
      <h3 className="question"> {data[index].question}</h3>
      <div className="options">
        {children}
      </div>
    </>
  );
}

export default Question;
