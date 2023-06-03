import {Route , Routes} from "react-router-dom";
import React from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path="/" element ={<Main heading='listen the text you entered'></Main>}/>
   <Route path="/About" element ={<About></About>}/>
   </Routes>
   </>
  );
}

export default App;
