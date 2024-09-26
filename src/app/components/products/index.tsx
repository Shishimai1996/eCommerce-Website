"use client";

import { productData } from "@/productData";
import { fonts } from "@/styles/fonts/fonts";
import { colors } from "@/styles/tokens/colors";
import { Box, Typography, ButtonBase, styled, Button } from "@mui/material";
import { ProductCard } from "./productCard";

export const Products: React.FC = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={fonts.h11} color={colors.textNavy}>
        Our Products
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          m: "5%",
        }}
      >
        {productData.map((product, index) => (
          <Box key={index}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
      <Button
        variant="outlined"
        sx={{
          color: colors.textOrange,
          borderColor: colors.textOrange,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: colors.textOrange,
            color: "white",
            borderColor: colors.textOrange,
          },
          ...fonts.h4,
          width: "245px",
        }}
      >
        Show More
      </Button>
    </Box>
  );
};
