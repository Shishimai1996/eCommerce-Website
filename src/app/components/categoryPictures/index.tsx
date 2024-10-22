"use client";

import { Box, Grid, Typography } from "@mui/material";
import bedroom from "@public/images/bedroom.png";
import dining from "@public/images/dining.jpg";
import living from "@public/images/living.png";
import Image from "next/image";

export const CategoryPictures: React.FC = () => {
  const category = [
    { image: dining, label: "Dining" },
    { image: living, label: "Living" },
    { image: bedroom, label: "Bedroom" },
  ];
  return (
    <Box sx={{ textAlign: "center", m: "3%" }}>
      <Typography variant="h3" color="primary.main">
        Browse The Range
      </Typography>
      <Typography variant="body1" color="secondary.dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: "3%" }}>
        {category.map((item) => (
          <Grid item xs={9} sm={3.5} key={item.label} textAlign="center">
            <Image
              src={item.image}
              alt={item.label}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
            <Typography variant="h6" color="primary.main">
              {item.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
