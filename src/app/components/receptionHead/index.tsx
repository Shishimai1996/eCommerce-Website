"use client";

import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import banner from "@public/images/banner.jpg";
import Image from "next/image";

export const ReceptionHead: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ position: "relative", width: "100%", top: 0, left: 0, zIndex: 0 }}
    >
      <Box
        sx={{
          [theme.breakpoints.down("md")]: {
            width: "110%",
          },
        }}
      >
        <Image
          src={banner}
          alt={"banner"}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Card
        sx={{
          position: "absolute",
          bgcolor: "secondary.light",
          width: "40%",
          top: "23%",
          left: "51.5%",
          zIndex: 10,
          padding: "40px 30px",
          borderRadius: 0,
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h7">New Arrival</Typography>
          <Typography variant="h1" color="warning.main">
            Discover Our <br />
            New Collection
          </Typography>
          <Typography variant="h8">
            Lorem ipsum dolor sit amet, consectetur adipiscing eilt. Utelit
            tellus, luctus nec ullamcorper mattis.
          </Typography>
          <Button
            sx={{
              padding: "25px 72px",
              mt: "30px",
              borderRadius: 0,
            }}
          >
            BUY NOW
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
