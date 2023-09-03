import React, { useEffect, useState } from "react";
// Style
import { useStyles } from "./CountProduct.style";
// Libs
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateCountTour } from "../../../redux/count/count.actions";

const CountProduct = () => {
  const dispatch = useDispatch();
  const localStorageCount = localStorage.getItem("count");
  const countDefault = parseInt(localStorageCount) ?? 0;
  dispatch(updateCountTour(countDefault));

  const classes = useStyles();
  const [quantity, setQuantity] = useState(countDefault);

  const changeCount = (newValue) => {
    dispatch(updateCountTour(newValue));
  };

  const handleIncrement = () => {
    const newCount = quantity + 1;
    setQuantity(newCount);
    changeCount(newCount);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newCount = quantity - 1;
      setQuantity(newCount);
      changeCount(newCount);
    }
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
    <div className={classes.root}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={handleDecrement}
      >
        -
      </Button>
      <TextField
        type="number"
        value={quantity}
        onChange={handleInputChange}
        inputProps={{ min: 1 }}
        className={classes.quantityInput}
      />
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default CountProduct;
