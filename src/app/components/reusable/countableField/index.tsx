"use client";

import { cartStore } from "@/store/shoppingStore";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import * as React from "react";

export const CountableField: React.FC<{
  itemId: number;
  title: string;
  price: number;
  image: string;
}> = observer(({ itemId, title, price, image }) => {
  const item = cartStore.cart.find((cartItem) => cartItem.id === itemId); //find cart item if the id is matched between passed item and cart item.

  const quantity = item ? item.quantity : 0; //if there is no item in cart, display 0.

  //increase only quantity
  const handleIncrease = () => {
    if (item) {
      cartStore.addToCart({
        ...item,
        quantity: 1,
      });
    } else {
      // if there is no item in cart, add new item in cart.
      const newItem = {
        id: itemId,
        title: title,
        price: price,
        quantity: 1,
        image: image,
      };
      cartStore.addToCart(newItem);
    }
  };

  //if quantity is more than 1, decrease cartStore quantity.
  const handleDecrease = () => {
    if (item && item.quantity > 0) {
      cartStore.addToCart({
        ...item,
        quantity: -1,
      });
    }
  };

  return (
    <TextField
      value={quantity}
      size="small"
      inputProps={{ min: 0, style: { textAlign: "center" } }}
      sx={{ width: 100, height: 50, textAlign: "center" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton
              onClick={handleDecrease}
              size="small"
              disabled={quantity <= 0}
            >
              -
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleIncrease} size="small">
              +
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
});
