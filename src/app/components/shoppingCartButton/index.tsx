"use client";

import { cartStore } from "@/store/shoppingStore";
import { Badge, Button } from "@mui/material";
import shoppingCartButton from "@public/images/shoppingCart.png";
import { observer } from "mobx-react-lite";
import Image from "next/image";

export const ShoppingCartButton: React.FC<{
  handleShoppingCartOpen: () => void;
}> = observer(({ handleShoppingCartOpen }) => {
  return (
    <Badge badgeContent={cartStore.totalQuantity} color="success">
      <Button
        sx={{ bgcolor: "secondary.main" }}
        variant="text"
        onClick={handleShoppingCartOpen}
      >
        <Image src={shoppingCartButton} alt={"shoppingCart"} />
      </Button>
    </Badge>
  );
});
