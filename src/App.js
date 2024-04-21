import { Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main heading='listen the text you entered' />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
