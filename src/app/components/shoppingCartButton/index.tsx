"use client";

import { Button } from "@mui/material";
import shoppingCartButton from "@public/images/shoppingCart.png";
import Image from "next/image";
import { useState } from "react";

export const ShoppingCartButton: React.FC = () => {
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => {
    setOpenCart(true);
  };
  return (
    <Button
      sx={{ bgcolor: "secondary.main" }}
      variant="text"
      onClick={() => {
        handleOpenCart();
      }}
    >
      <Image src={shoppingCartButton} alt={"shoppingCart"} />
    </Button>
  );
};
