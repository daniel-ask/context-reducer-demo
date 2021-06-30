import "../stylesheets/App.scss";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import NameForm from "./NameForm";
import ChangeBackground from "./ChangeBackground";
import Students from './Students';
import NameThemeProvider from "../context/NameThemeProvider";


function App() {
  return (
    <NameThemeProvider>
      <div className="App">
        <Nav />
        <Home />
        <NameForm />
        <ChangeBackground />
        <Students/>
      </div>
    </NameThemeProvider>
  );
}

export default App;
