import "./App.css";

import { useData } from "./context/DataContext";

import { Filter } from "./components/Filter";

import { Homepage } from "./components/Homepage";
import { Pageno } from "./components/Pageno";

function App() {
  const data = useData();
  console.log(data);
  return (
    <div className="mainContainer">
      <Filter />
      <Homepage />
      <Pageno />
    </div>
  );
}

export default App;
