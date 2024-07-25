import useProvider from "./hook/useProvider";

function Header() {
  const x = useProvider();
  console.log("Header");
  console.log(x);

  return (
    <header className='app-header'>
      <img src='logo512.png' alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
