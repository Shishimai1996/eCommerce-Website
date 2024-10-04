"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import checkoutHead from "@public/images/checkoutHead.png";
import houseLogo from "@public/images/houseLogo.png";
import { Breadcrumb } from "@/components/reusable/breadCrumbs";
export const CheckoutHead = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Image
        src={checkoutHead}
        alt={"checkoutHead"}
        style={{ zIndex: 1, width: "100%" }}
      />
      <Box
        position="absolute"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          top: "50%",
          right: "40%",
          transform: "translate(-50%, -50%)",

          "@media (max-width: 600px)": {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            right: "unset",
          },
        }}
      >
        <Image
          src={houseLogo}
          alt={"houseLogo"}
          width={50}
          height={30}
          style={{ zIndex: 3 }}
        />

        <Typography variant="h2" color="primary.main">
          Checkout
        </Typography>
        <Breadcrumb pathname={"checkout"} />
      </Box>
    </Box>
  );
};
