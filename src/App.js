import React from "react";
import "./app.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Signup from "./signup/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./signup/Login";
import ViewTodo from "./View/ViewTodo";
import AddTodo from "./View/AddTodo";
import About from "./Navbar/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={<ViewTodo />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </div>
  );
};

export default App;
