"use client";

import { cartStore } from "@/store/shoppingStore";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";

export const Receipt = observer(() => {
  return (
    <Box sx={{ m: "15%", display: "flex", flexDirection: "column", gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" color="primary.main">
          Product
        </Typography>
        <Typography variant="h8" color="primary.main">
          Subtotal
        </Typography>
      </Box>
      <ul>
        {cartStore.cart.map((item) => (
          <li key={item.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                }}
              >
                <Typography variant="body2" color="primary.dark">
                  {item.title}
                </Typography>
                <Typography variant="h9" color="primary.main">
                  x {item.quantity}
                </Typography>
              </Box>
              <Typography variant="body2" color="primary.main">
                Rs. {new Intl.NumberFormat("ja-JP").format(item.price)}
              </Typography>
            </Box>
          </li>
        ))}
      </ul>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="primary.main">
          Subtotal
        </Typography>
        <Typography variant="body2" color="primary.main">
          Rs. {cartStore.totalPrice}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="primary.main">
          Total
        </Typography>
        <Typography variant="h4" color="warning.main">
          Rs. {cartStore.totalPrice}
        </Typography>
      </Box>
      <Divider />

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="DirectBankTransfer"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="DirectBankTransfer"
            control={<Radio />}
            label="Direct Bank Transfer"
            sx={{ color: "primary.main" }}
          />
          <Typography variant="body2" color="primary.light">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </Typography>
          <FormControlLabel
            value="creditcardTransfer"
            control={<Radio />}
            label="Credit card Transfer"
            sx={{ color: "primary.main" }}
          />
          <FormControlLabel
            value="CashOnDelivery"
            control={<Radio />}
            label="Cash On Delivery"
            sx={{ color: "primary.main" }}
          />
        </RadioGroup>
      </FormControl>

      <Typography variant="h7" color="primary.main">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </Typography>
      <Button
        variant="outlined"
        sx={{
          color: "primary.main",
          bgcolor: "transparent",
          borderColor: "primary.main",
          borderWidth: 1,
          borderRadius: "10px",
          width: 250,
          ml: "5%",
        }}
      >
        Place order
      </Button>
    </Box>
  );
});
