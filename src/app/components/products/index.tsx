"use client";

import { productData } from "@/productData";
import { Box, Button, Typography } from "@mui/material";
import { ProductCard } from "./productCard";

export const Products: React.FC = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h2" color="primary.dark">
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
          color: "warning.main",
          borderColor: "warning.main",
          backgroundColor: "secondary.main",
          "&:hover": {
            backgroundColor: "warning.main",
            color: "secondary.main",
            borderColor: "warning.main",
          },
          borderRadius: 0,
          width: "245px",
        }}
      >
        Show More
      </Button>
    </Box>
  );
};
