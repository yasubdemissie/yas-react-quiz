import useProvider from "./hook/useProvider";

function Main({ children }) {
  const x = useProvider();
  console.log("Main");
  console.log(x);
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default Main;
