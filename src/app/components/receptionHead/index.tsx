"use client";

import Image from "next/image";
import banner from "@public/images/banner.jpg";
import { Box, Button, Card, Typography } from "@mui/material";
import { colors } from "@/styles/tokens/colors";
import { fonts } from "@/styles/fonts/fonts";

export const ReceptionHead: React.FC = () => {
  return (
    <>
      <Box
        sx={{ position: "relative", width: "100%", top: 0, left: 0, zIndex: 0 }}
      >
        <Image
          src={banner}
          alt={"banner"}
          style={{ width: "100%", height: "auto" }}
        />
        <Card
          sx={{
            position: "absolute",
            bgcolor: colors.cardBackground,
            width: "40%",
            top: "23%",
            left: "51.5%",
            zIndex: 10,
            padding: "40px 30px",
          }}
        >
          <Typography sx={fonts.h4}>New Arrival</Typography>
          <Typography sx={fonts.h2} color={colors.textOrange}>
            Discover Our <br />
            New Collection
          </Typography>
          <Typography sx={fonts.h8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing eilt. Utelit
            tellus, luctus nec ullamcorper mattis.
          </Typography>
          <Button
            sx={{
              bgcolor: colors.textOrange,
              color: colors.backgroundWhite,
              padding: "25px 72px",
              mt: "30px",
              fontSize: fonts.h3.fontSize,
            }}
          >
            BUY NOW
          </Button>
        </Card>
      </Box>
    </>
  );
};
