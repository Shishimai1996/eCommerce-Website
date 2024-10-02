"use client";

import { TProduct } from "@/productData";
import { cartStore } from "@/store/shoppingStore";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";

export const ProductDetailMain: React.FC<{ product: TProduct }> = ({
  product,
}) => {
  const [count, setCount] = useState<number>(0);

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const cartItem = cartStore.cart.find((item) => item.id === product.id);
    if (cartItem) {
      setCount(cartItem.quantity);
    }
  }, [handleDecrease, handleIncrease]);

  const productCategory = [
    { title: "SKU", content: product?.sku },
    { title: "Category", content: product?.category },
    { title: "Tags", content: product?.tags },
    { title: "Share", content: "facebook, linkedIn, X" },
  ];

  const value = product?.star;
  const [sizeButtonActive, setSizeButtonActive] = useState<number>(0);

  const handleChangeButton = (index: number) => {
    setSizeButtonActive(index);
  };

  const handleAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    cartStore.addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: count,
      image: product.img,
    });
  };

  return (
    <>
      <Box sx={{ flexGlow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Image
                src={product?.img}
                alt={"productImage"}
                width={200}
                height={250}
                style={{
                  borderRadius: "3%",
                  objectFit: "contain",
                  width: "50%",
                  height: "auto",
                }}
                sizes="(max-width: 600px) 300px, 400px"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                ml: 5,
                gap: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h2" color="primary.main">
                {product?.title}
              </Typography>
              <Typography variant="h4" color="primary.light">
                Rs. {new Intl.NumberFormat("ja-JP").format(product?.price)}
              </Typography>

              <Box sx={{ width: 300, display: "flex", alignItems: "center" }}>
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Typography variant="body3" color="primary.light">
                  | {product?.review.length} customer reviews
                </Typography>
              </Box>

              <Typography variant="body3" color="primary.main">
                {product?.description}
              </Typography>
              <Typography variant="body2" color="primary.light">
                Size{" "}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: 200,
                  gap: 1,
                }}
              >
                {product?.size.map((size, index) => (
                  <Button
                    key={size}
                    onClick={() => handleChangeButton(index)}
                    disabled={sizeButtonActive === index}
                    sx={{
                      width: 50,
                      height: 20,
                      p: 0,
                      bgcolor:
                        sizeButtonActive === index
                          ? "warning.main"
                          : "secondary.light",
                      color:
                        sizeButtonActive === index
                          ? "secondary.main"
                          : "primary.main",
                      "&:hover": {
                        bgcolor: "warning.main",
                        color: "secondary.main",
                      },
                    }}
                  >
                    {size}
                  </Button>
                ))}
              </Box>
              <Typography variant="body2" color="primary.light">
                Color
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {product?.color.map((color, index) => (
                  <Box
                    key={color}
                    sx={{
                      bgcolor: product.color[index],
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "primary.light",
                    }}
                  />
                ))}
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxWidth: 250,
                }}
                mt={2}
              >
                <TextField
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  size="small"
                  inputProps={{ min: 0, style: { textAlign: "center" } }}
                  sx={{ width: 100, height: 50, textAlign: "center" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={handleDecrease} size="small">
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
                <Button
                  variant="outlined"
                  sx={{
                    color: "primary.main",
                    bgcolor: "secondary.main",
                    borderColor: "primary.main",
                  }}
                  onClick={handleAddCart}
                >
                  Add To Cart
                </Button>
              </Box>
              <Divider sx={{ mt: "5%" }} />
              <Box sx={{ mt: "5%" }}>
                {productCategory.map((item, index) => (
                  <Typography key={index} color="primary.light" variant="body2">
                    {item.title}:{item.content}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
