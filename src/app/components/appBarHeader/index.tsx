"use client";

import React, { MouseEvent, useEffect, useState } from "react";

import { cartStore } from "@/store/shoppingStore";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import bag from "@public/images/bag.png";
import houseLogo from "@public/images/houseLogo.png";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { ShoppingCartButton } from "../shoppingCartButton";
import CancelIcon from "@mui/icons-material/Cancel";

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

const List: React.FC<{
  handleShoppingCartClose: () => void;
}> = ({ handleShoppingCartClose }) => {
  const totalPrice = cartStore.cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "30%",
        height: "750px",
        bgcolor: "secondary.main",
        boxShadow: 3,
        p: 2,
        zIndex: 11,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", m: "5%" }}>
        <Typography variant="h6" color="primary.main">
          Shopping Cart
        </Typography>

        <Button
          sx={{ bgcolor: "transparent" }}
          onClick={() => handleShoppingCartClose()}
        >
          <Image src={bag} alt="bag" />
        </Button>
      </Box>
      <Divider />

      {cartStore.cart.length ? (
        <Box sx={{ m: "3%" }}>
          <ul>
            {cartStore.cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Image
                      src={item.image}
                      alt={"image"}
                      width={100}
                      height={100}
                      style={{ borderRadius: "5%" }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="primary.main">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="primary.main">
                      {item.quantity} x{" "}
                    </Typography>
                    <Typography variant="h10" color="warning.main">
                      {" "}
                      Rs. {item.price}{" "}
                    </Typography>
                  </Box>
                  <Box>
                    <CancelIcon
                      sx={{
                        color: "primary.light",
                        cursor: "pointer",
                        ml: "auto",
                      }}
                    />
                  </Box>
                </Box>
              </li>
            ))}
          </ul>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" color="primary.main">
              Subtotal
            </Typography>
            <Typography variant="h7" color="warning.main">
              Rs. {totalPrice}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography variant="body2" color="primary.main">
          No Product
        </Typography>
      )}
    </Box>
  );
};

export const AppBarHeader: React.FC = observer((): React.JSX.Element => {
  const [openShoppingCart, setOpenShoppingCart] = useState<boolean>(false);

  useEffect(() => {
    console.log("openShoppingCart updated: ", openShoppingCart);
  }, [openShoppingCart]);

  const handleShoppingCartOpen = () => {
    console.log("open!");
    setOpenShoppingCart(true);
  };

  const handleShoppingCartClose = () => {
    console.log("close!");
    setOpenShoppingCart(false);
  };

  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <>
      {/* {openShoppingCart && ( */}
      {/* <Box
        sx={{
          bgcolor: openShoppingCart ? "#00000061" : "transparent",
          zIndex: 10,
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
        }} */}
      {/* // onClick={handleShoppingCartClose} */}
      {/* > */}
      {/* )} */}

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
                <List handleShoppingCartClose={handleShoppingCartClose} />
              </Box>
            )}
          </Toolbar>
        </Box>
      </AppBar>
      {/* </Box> */}
    </>
  );
});
