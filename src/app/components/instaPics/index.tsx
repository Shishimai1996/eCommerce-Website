"use client";

import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import instaPic3 from "@public/images/bedroom.png";
import instaPic1 from "@public/images/instaPic1.png";
import instaPic2 from "@public/images/instaPic2.png";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { InstaPicCard } from "./instaPicCard";
import { DotPagination } from "./dotPagination";

export type TPictures = {
  img: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

export const InstaPics: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === pictures.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const pictures: TPictures[] = [
    {
      img: instaPic1,
      alt: "instaPic1",
      title: " 01 ー Bed Room",
      description: " Inner Peace",
    },
    {
      img: instaPic2,
      alt: "instaPic2",
      title: " 02 ー Dining Room",
      description: "Wooden style",
    },
    {
      img: instaPic3,
      alt: "instaPic3",
      title: " 03 ー Bed Room",
      description: "natural color",
    },
    {
      img: instaPic3,
      alt: "instaPic3",
      title: " 03 ー Bed Room",
      description: "natural color",
    },
  ];

  return (
    <Paper sx={{ bgcolor: "warning.light", mt: "5%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: "5%",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", p: "5%" }}>
          <Typography variant="h2">
            50+ Beautiful rooms <br />
            inspiration
          </Typography>
          <Typography variant="h9">
            Our designer already made a lot of beautiful <br />
            prototypes of rooms that inspire you
          </Typography>
          <Button
            sx={{
              width: "176px",
              mt: "3%",
              borderRadius: 0,
            }}
          >
            Explore More
          </Button>
        </Box>

        <Box sx={{ position: "relative", maxWidth: 2000, flexGrow: 1 }}>
          <Grid
            container
            spacing={3}
            sx={{
              alignItems: "flex-start",
            }}
          >
            {pictures
              .slice(activeStep, activeStep + 3)
              .concat(
                pictures.slice(0, Math.max(0, activeStep + 3 - pictures.length))
              )
              .map((item, index) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={index}
                  sx={{
                    [theme.breakpoints.down("md")]: {
                      display: index === 0 ? "block" : "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: index === 0 ? "600px" : "500px",
                      overflow: "hidden", //avoid picture go outside the frame
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={400}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
          </Grid>
          <InstaPicCard
            pictures={pictures[activeStep]}
            handleNext={handleNext}
          />
          <Box
            sx={{
              position: "absolute",
              top: "90%",
              right: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <DotPagination activeStep={activeStep} pictures={pictures} />
          </Box>
          <Button
            size="medium"
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "5%",
              transform: "translateY(-50%)",
              borderRadius: "100%",
              width: "30px",
              height: "60px",
              color: "warning.main",
              bgcolor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.light",
              },
              zIndex: 3,

              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <KeyboardArrowRight />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
