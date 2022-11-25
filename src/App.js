import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMovies from "./AllMovies";
import Movie from "./Movie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllMovies />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
