import { ProductDescription } from "@/components/productDescription";
import { ProductDetailMain } from "@/components/productDetailMain";
import { RelatedProducts } from "@/components/relatedProducts";
import { productData } from "@/productData";
import { Box, Typography } from "@mui/material";
import { Breadcrumb } from "@/components/reusable/breadCrumbs";

type ProductDetailProps = {
  params: { id: string };
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  params,
}): JSX.Element => {
  const { id } = params;
  const productContent = productData.find(
    (product) => product.id === Number(id)
  );

  if (!productContent) {
    return (
      <Typography variant="h6" color="error">
        Product not found.
      </Typography>
    );
  }

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

export async function generateStaticParams() {
  const ids = productData.map((product) => ({ id: product.id.toString() }));
  return ids;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = productData.find((p) => p.id === Number(params.id));
  return {
    title: product ? product.title : "Product not found",
    description: product
      ? product.description
      : "No product information available",
  };
}
