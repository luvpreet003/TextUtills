import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  // const[darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState({ msg: "All working!", type: "success" });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm // "/"
          heading="Enter the text to analyse below"
          showAlert={showAlert}
        />
        {/* <About/>   // "/about"  */}
      </div>
    </>
  );
}

export default App;
