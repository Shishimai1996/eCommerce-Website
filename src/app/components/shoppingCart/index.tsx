"use client";

import React from "react";

import { cartStore } from "@/store/shoppingStore";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button, Divider, Typography } from "@mui/material";
import bag from "@public/images/bag.png";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CountableField } from "../reusable/countableField";
import { useTheme } from "@mui/material/styles";

export const ShoppingCart: React.FC<{
  handleShoppingCartClose: () => void;
}> = observer(({ handleShoppingCartClose }) => {
  const router = useRouter();
  const theme = useTheme();
  const handleCheckoutPage = () => {
    router.push(`/checkout`);
    handleShoppingCartClose();
  };

  return (
    <Box
      sx={{
        bgcolor: "#00000061",
        zIndex: 10,
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
      }}
      onClick={() => handleShoppingCartClose()}
    >
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
          [theme.breakpoints.down("md")]: {
            width: "95%",
          },
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", m: "5%" }}>
          <Typography variant="h6" color="primary.main">
            Shopping Cart
          </Typography>

          <Button
            sx={{ bgcolor: "transparent" }}
            onClick={() => cartStore.clearCart()}
          >
            <Image src={bag} alt="bag" />
          </Button>
        </Box>
        <Divider />

        {cartStore.cart.length ? (
          <Box
            sx={{ m: "3%", height: "calc(100% - 200px)", overflowY: "auto" }} //scroll
          >
            <ul>
              {cartStore.cart.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={"image"}
                    width={100}
                    height={100}
                    style={{ borderRadius: "5%" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      minWidth: 230,
                      gap: 1,
                      ml: "5%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="primary.main"
                      sx={{ ml: "3%" }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CountableField
                        itemId={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                      />
                      <Typography
                        variant="h10"
                        color="primary.main"
                        sx={{ ml: "3%" }}
                      >
                        x
                      </Typography>
                      <Typography variant="h10" color="warning.main">
                        Rs. {new Intl.NumberFormat("ja-JP").format(item.price)}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    sx={{
                      bgcolor: " transparent",
                      "&:hover": {
                        bgcolor: " transparent",
                      },
                    }}
                    onClick={() => cartStore.removeFromCart(item.id)}
                  >
                    <CancelIcon
                      sx={{
                        color: "primary.light",
                        cursor: "pointer",
                      }}
                    />
                  </Button>
                </li>
              ))}
            </ul>
            <Box
              position="absolute"
              sx={{ bottom: 0, width: "100%", p: 2, left: 0 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Typography variant="body2" color="primary.main">
                  Subtotal
                </Typography>
                <Typography variant="h7" color="warning.main">
                  Rs. {cartStore.totalPrice}
                </Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  mt: "10%",
                }}
              >
                {["Cart", "Checkout", "Comparison"].map((label, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    sx={{
                      color: "primary.main",
                      bgcolor: "secondary.main",
                      borderRadius: "50px",
                      font: "body3",
                      height: "30px",
                      width:
                        label === "Comparison"
                          ? "130px"
                          : label === "Checkout"
                          ? "100px"
                          : "80px",
                    }}
                    onClick={
                      label === "Checkout" ? handleCheckoutPage : undefined
                    }
                  >
                    {label}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        ) : (
          <Typography variant="body2" color="primary.main" sx={{ m: "20%" }}>
            No Product
          </Typography>
        )}
      </Box>
    </Box>
  );
});
