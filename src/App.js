import logo from "./logo.svg";
import "./App.css";
import "./utility.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useData } from "./context/DataContext";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";

function App() {
  return (
    <div>
      <Filter />
      <Card />
    </div>
  );
}

export default App;
