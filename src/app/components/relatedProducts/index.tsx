"use client";

import { Box, Button, Divider, Typography } from "@mui/material";
import { ProductCard } from "../products/productCard";
import { TProduct } from "@/productData";
import { productData } from "@/productData";

export const RelatedProducts: React.FC<{ product: TProduct }> = ({
  product,
}) => {
  const relatedProduct = productData.filter(
    (item) =>
      item.id !== product?.id &&
      item.tags.some((tag) => product?.tags.includes(tag))
  );
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "3%",
        }}
      >
        <Typography variant="h3" color="primary.main">
          Related Products
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
          {relatedProduct.length > 0 ? (
            relatedProduct.map((product, index) => (
              <Box key={index}>
                <ProductCard product={product} />
              </Box>
            ))
          ) : (
            <Typography> No related products found</Typography>
          )}
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
    </>
  );
};
