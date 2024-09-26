"use client";

import { fonts } from "@/styles/fonts/fonts";
import { colors } from "@/styles/tokens/colors";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import dining from "@public/images/dining.jpg";
import living from "@public/images/living.png";
import bedroom from "@public/images/bedroom.png";

export const CategoryPictures: React.FC = () => {
  const category = [
    { image: dining, label: "Dining" },
    { image: living, label: "Living" },
    { image: bedroom, label: "Bedroom" },
  ];
  return (
    <Box sx={{ textAlign: "center", m: "3%" }}>
      <Typography sx={fonts.h9} color={colors.textPrimary}>
        Browse The Range
      </Typography>
      <Typography sx={fonts.body3} color={colors.textSecondary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: "3%" }}>
        {category.map((item) => (
          <Grid item xs={12} sm={3.5} key={item.label} textAlign="center">
            <Image src={item.image} alt={item.label} />
            <Typography sx={fonts.h10} color={colors.textPrimary}>
              {item.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
