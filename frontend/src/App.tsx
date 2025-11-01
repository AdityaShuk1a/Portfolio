import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div data-theme="cupcake" >
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
