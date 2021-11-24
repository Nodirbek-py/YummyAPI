import { Div, Grid } from "../components/foodListStyle";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFoodList } from "../store/foodListSlice";
import '../style.css'
import { Link } from "react-router-dom";

const FoodList = () => {
  const state = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodList());
  }, [dispatch]);
  console.log(state);

  return (
    <div className='container'>
    <Grid>
      {state.status === "fulfilled"
        ? state.foodsList.map((foodList, minasa) => (
              <Link to={`/${minasa}`}>
            <Div>
              <img src={foodList.display.images[0]} alt="" />
              <h3>{foodList.display.displayName}</h3>
            </Div>
              </Link>
          ))
        : null}
    </Grid>
    </div>
  );
};

export default FoodList;
