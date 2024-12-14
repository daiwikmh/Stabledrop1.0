import React from "react";
import Navbar from "../src/components/navbar/navbar";
import MainPage from "../src/components/explore/explore";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SignInPage from "./components/explore/signin"; 

const App: React.FC = () => {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;

