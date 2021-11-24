import React from "react";
import FoodList from "./views/foodList";
import FoodSearch from "./views/foodSearch";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "./views/food";

const App = () => {
  return (
    <BrowserRouter>
      <FoodSearch />

      <Routes>
        <Route exact path="/" element={<FoodList />} />
        <Route exact path="/:id" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
