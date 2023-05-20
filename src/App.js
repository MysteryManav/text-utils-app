// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, /*Link*/ } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

// let name = "Madhur";
function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const darkMode = () => {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";
  };

  const lightMode = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  };

  if (mode === "dark") {
    darkMode();
  } else {
    lightMode();
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
      darkMode();
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
      lightMode();
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    // We can return only one element in a function
    // If we do this it will generate an error
    // <h1>This is heading</h1>

    // However if we want to we can use the JSX Fragments <>....</> to do that, like this....
    // <>Element(s)</>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Madhur
    //     </a>
    //   </header>
    // </div>
    <>
      {/* We can pass the props to the component like this.... */}
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="Documentation"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* Here, the title and aboutText are prop that we are passing to the Navbar component */}
        <Alert alert={alert} />
        <div className="container-fluid my-3">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter the Text to Analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
