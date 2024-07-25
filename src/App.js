import { useEffect, useReducer } from "react";

import useProvider from "./Components/hook/useProvider.jsx";
import { Context } from "./context.jsx";
import MainComponent from "./MainComponent.jsx";
// import { map } from "leaflet";

export default function App() {
  return (
    <>
      <div className="App">
        <Context>
          <MainComponent />
        </Context>
      </div>
    </>
  );
}
