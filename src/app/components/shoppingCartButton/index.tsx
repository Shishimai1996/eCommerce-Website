"use client";

import { Button } from "@mui/material";
import shoppingCartButton from "@public/images/shoppingCart.png";
import Image from "next/image";

export const ShoppingCartButton: React.FC<{
  handleShoppingCartOpen: () => void;
}> = ({ handleShoppingCartOpen }) => {
  return (
    <Button
      sx={{ bgcolor: "secondary.main" }}
      variant="text"
      onClick={handleShoppingCartOpen}
    >
      <Image src={shoppingCartButton} alt={"shoppingCart"} />
    </Button>
  );
};
