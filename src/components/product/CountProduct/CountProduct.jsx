import React, { useEffect, useState } from "react";
// Style
import { useStyles } from "./CountProduct.style";
// Libs
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateCountTour } from "../../../redux/count/count.actions";

const CountProduct = () => {
  const dispatch = useDispatch();
  const localStorageCount = localStorage.getItem("count");
  const countDefault = parseInt(localStorageCount ?? 1);
  dispatch(updateCountTour(countDefault));

  const classes = useStyles();
  const [quantity, setQuantity] = useState(countDefault);

  const changeCount = (newValue) => {
    dispatch(updateCountTour(newValue));
  };

  const handleInputChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
      changeCount(newQuantity);
    }
  };

  useEffect(() => {
    if (quantity) {
      localStorage.setItem("count", quantity);
    }
  }, [quantity]);

  return (
    <div data-testid="CountProduct-Wrapper" className={classes.root}>
      <TextField
        type="number"
        value={quantity}
        onChange={handleInputChange}
        inputProps={{ min: 1, "data-testid": "input" }}
        className={classes.quantityInput}
      />
    </div>
  );
};

export default CountProduct;
