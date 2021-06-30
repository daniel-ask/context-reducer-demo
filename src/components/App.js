import "../stylesheets/App.scss";
import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import NameForm from "./NameForm";
import NameThemeProvider from "../context/NameThemeProvider";

function App() {
  return (
    <NameThemeProvider>
      <div className="App">
        <Nav />
        <Home />
        <NameForm />
      </div>
    </NameThemeProvider>
  );
}

export default App;
