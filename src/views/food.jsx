import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Food = () => {
  const state = useSelector((state) => state.list);
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>dsfasfs</h1>
      <img src={state.foodsList[Number(params.id)].display.images[0]} alt="" />
      <h3>{state.foodsList[Number(params.id)].display.displayName}</h3>
      <a target="_blank" href={state.foodsList[Number(params.id)].content.details.directionsUrl}>Making ready</a>
    </>
  );
};

export default Food;
