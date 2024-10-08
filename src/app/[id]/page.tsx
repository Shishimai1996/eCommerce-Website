import { ProductDescription } from "@/components/productDescription";
import { ProductDetailMain } from "@/components/productDetailMain";
import { RelatedProducts } from "@/components/relatedProducts";
import { TProduct, productData } from "@/productData";
import { Box, Typography } from "@mui/material";
import { Breadcrumb } from "@/components/reusable/breadCrumbs";
const ProductDetail: React.FC<{ params: TProduct }> = ({
  params,
}): JSX.Element => {
  const { id } = params;
  const productContent = productData[id - 1];

  return (
    <Box
      sx={{
        m: "3%",
        gap: 3,
        display: "flex",
        flexDirection: "column",
        mt: "50px",
      }}
    >
      <Box sx={{ mt: "50px", display: "flex", flexDirection: "row", gap: 2 }}>
        <Breadcrumb product={productContent} pathname="shop" />
        <Box sx={{ bgcolor: "primary.light", height: "30px", width: "2px" }} />
        <Typography sx={{ color: "text.primary" }}>
          {productContent?.title}
        </Typography>
      </Box>
      <ProductDetailMain product={productContent} />
      <ProductDescription product={productContent} />
      <RelatedProducts product={productContent} />
    </Box>
  );
};

export default ProductDetail;
