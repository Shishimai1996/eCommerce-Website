import { Box, Paper, Typography } from "@mui/material";
import highQuality from "@public/images/highQuality.png";
import warranty from "@public/images/warranty.png";
import support from "@public/images/support.png";
import freeShipping from "@public/images/freeShipping.png";
import Image from "next/image";

export const BrandAdvertisement = () => {
  const title = [
    {
      icon: highQuality,
      title: "High Quality",
      subtitle: "crafted from top materials",
    },
    {
      icon: warranty,
      title: "Warranty Protection",
      subtitle: "Over 2 years",
    },
    {
      icon: freeShipping,
      title: "Free Shipping",
      subtitle: "Order over 150$",
    },
    {
      icon: support,
      title: "24 / 7 Support",
      subtitle: "Dedicated support",
    },
  ];
  return (
    <Paper
      sx={{
        bgcolor: "secondary.light",
        width: "100%",
        height: { md: "270px", xs: "500px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 5,
          width: "80%",
        }}
      >
        {title.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={50}
              height={50}
              style={{ objectFit: "contain" }}
            />
            <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" color="primary.main">
                {item.title}
              </Typography>
              <Typography variant="h8" color="primary.light">
                {item.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
