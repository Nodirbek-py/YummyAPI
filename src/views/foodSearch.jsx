import { Div, Grid } from "../components/foodListStyle";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  Fon,
  Input,
  Nav,
  Button,
  Anchor,
  ButtonLogin,
} from "../components/foodSearchStyle";
import { getFoodSearch } from "../store/foodSearchSlice";
import "../style.css";

const FoodSearch = () => {
  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    dispatch(getFoodSearch(keyword));
  };
  console.log(state);

  return (
    <>
      <Fon>
        <Nav className="container">
          <div>
            <Input
              type="text"
              placeholder="Specify your taste"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          <div>
            <Anchor href="/">Login</Anchor>
            <ButtonLogin>Create Account</ButtonLogin>
          </div>
        </Nav>
      </Fon>

    <div className='container'>
      <Grid>  
      {state.status === 'fulfilled'
        ? state.foodsSearch.feed.map((foodSearch) => (
            <Div>
              <img src={foodSearch.display.images[0]} alt="" />
              <h3>{foodSearch.display.displayName}</h3>
              {/* <p>{foodSearch.content.yums.count}</p> */}
            </Div>
          ))
        : null}
        </Grid>
        </div>
    </>
  );
};

export default FoodSearch;
