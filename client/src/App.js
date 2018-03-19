import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";



const App = () => (

  <div className="container">
    <Header />
    <Search />
    <Results />
    <Saved />
  </div>
);


export default App;
