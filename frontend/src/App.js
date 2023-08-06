import React from 'react';
import './App.css';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import{Login , Pockman} from "../src/component/index"
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/pockman" element={<Pockman />} />
      </Routes>
    </div>
  );
};

export default App;