import "./App.css";
import React, { Fragment } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./components/contexts/Notes/notesState";
function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
              </Routes>
            </div>
          </Fragment>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
