"use client";

import React, { useState } from "react";

import { AppBar, Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import houseLogo from "@public/images/houseLogo.png";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { ShoppingCart } from "../shoppingCart";
import { ShoppingCartButton } from "../shoppingCartButton";

export const pages: {
  name: string;
  path: string;
}[] = [];

export const settings = ["logout"];

const Title: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <>
    <Image width={30} height={20} alt="logomark" src={houseLogo} />
    <Typography
      variant={isMobile ? "h4" : "h3"}
      noWrap
      sx={{
        mx: 1.5,
        display: "flex",
        flexGrow: isMobile ? 1 : 0,
        color: "#000000",
      }}
    >
      Furniro
    </Typography>
  </>
);

export const AppBarHeader: React.FC = observer((): React.JSX.Element => {
  const [openShoppingCart, setOpenShoppingCart] = useState<boolean>(false);

  const handleShoppingCartOpen = () => {
    setOpenShoppingCart(true);
  };

  const handleShoppingCartClose = () => {
    setOpenShoppingCart(false);
  };

  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 8,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box px={3} maxWidth="100%">
          <Toolbar disableGutters>
            <Title isMobile={isMobile} />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

            <ShoppingCartButton
              handleShoppingCartOpen={handleShoppingCartOpen}
            />

            {openShoppingCart && (
              <Box sx={{ zIndex: 11 }}>
                <ShoppingCart
                  handleShoppingCartClose={handleShoppingCartClose}
                />
              </Box>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
});
