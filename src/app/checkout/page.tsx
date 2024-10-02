import { BrandAdvertisement } from "@/components/brandAdvertisement";
import { CheckoutHead } from "@/components/checkoutHead";
import { OrderForm } from "@/components/orderForm";
import { Receipt } from "@/components/receipt";
import { Box, Grid } from "@mui/material";

const Checkout = () => {
  return (
    <Box sx={{ flexGlow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <CheckoutHead />
        </Grid>
        <Grid item xs={12} md={6}>
          <OrderForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <Receipt />
        </Grid>
        <BrandAdvertisement />
      </Grid>
    </Box>
  );
};
export default Checkout;
