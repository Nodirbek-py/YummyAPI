import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFoods } from "./store/foodSlice";
import { getSearch } from "./store/searchSlicee";
const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('')
  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);
  console.log(state);

  
  const search = () => {
    dispatch(getSearch(keyword));
  };

  return (
    <>
      <input onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={search}>click</button>
      {state.foodSlice.foods.length !== 0
        ? state.foodSlice.foods.map((food) => (
            <>
              <p>{food.display.displayName}</p>
              <img src={food.display.images[0]} />
            </>
          ))
        : null}
    </>
  );
};

export default App;
