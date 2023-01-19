import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { useData } from "./context/DataContext";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";

function App() {
  const data = useData();
  console.log(data);
  return (
    <div className="mainContainer">
      <Filter />
      {data.emailData.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
}

export default App;
