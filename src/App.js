import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { useData } from "./context/DataContext";

import { Filter } from "./components/Filter";
import { CardLayout } from "./components/CardLayout";
import { Body } from "./components/EmailBody";
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
