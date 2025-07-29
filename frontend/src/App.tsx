import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/register";
const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
