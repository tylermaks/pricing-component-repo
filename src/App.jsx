import React from "react"
import './Assets/Styles/App.scss';
import Cards from "./Assets/Components/Cards";
import Toggle from "./Assets/Components/Toggle";

function App() {
  return (
    <main className="App">
      <Toggle />
      <Cards />
    </main>
  );
}

export default App;
