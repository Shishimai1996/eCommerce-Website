"use client";

import { fonts } from "@/styles/fonts/fonts";
import { colors } from "@/styles/tokens/colors";
import { Box, Button, Paper, Typography, MobileStepper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import instaPic1 from "@public/images/instaPic1.png";
import instaPic2 from "@public/images/instaPic2.png";
import instaPic3 from "@public/images/bedroom.png";
import Image from "next/image";

export const InstaPics: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === pictures.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? pictures.length - 1 : prevActiveStep - 1
    );
  };

  const pictures = [
    { img: instaPic1, alt: "instaPic1" },
    { img: instaPic2, alt: "instaPic2" },
    { img: instaPic3, alt: "instaPic3" },
  ];

  return (
    <>
      <Paper sx={{ bgcolor: colors.instaPic, mt: "5%" }}>
        <Box sx={{ display: "flex", flexDirection: "row", p: "5%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", p: "5%" }}>
            <Typography sx={fonts.h11}>
              50+ Beautiful rooms <br />
              inspiration
            </Typography>
            <Typography sx={fonts.h6}>
              Our designer already made a lot of beautiful <br />
              prototypes of rooms that inspire you
            </Typography>
            <Button
              sx={{
                color: colors.backgroundWhite,
                borderColor: colors.textOrange,
                backgroundColor: colors.textOrange,
                "&:hover": {
                  backgroundColor: colors.instaPic,
                  color: colors.textOrange,
                  borderColor: colors.textOrange,
                },
                ...fonts.h4,
                width: "176px",
                mt: "3%",
              }}
            >
              Explore More
            </Button>
          </Box>

          <Box sx={{ position: "relative", maxWidth: 400, flexGrow: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "5%" }}>
              <Image
                src={pictures[activeStep].img}
                alt={pictures[activeStep].alt}
                width={400}
                height={500}
                style={{ objectFit: "cover" }}
              />
              <Image
                src={pictures[(activeStep + 1) % pictures.length].img}
                alt={pictures[(activeStep + 1) % pictures.length].alt}
                width={300}
                height={400}
                style={{ objectFit: "cover" }}
              />
              <Image
                src={pictures[(activeStep + 2) % pictures.length].img}
                alt={pictures[(activeStep + 2) % pictures.length].alt}
                width={50}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </Box>

            {/* 矢印ボタンを画像の左右中央に配置 */}
            {/* <Button
              size="small"
              onClick={handleBack}
              sx={{
                position: "absolute",
                top: "50%",
                left: "-30px",
                transform: "translateY(-50%)",
                borderRadius: "100%",
                width: "40px",
                height: "40px",
                color: colors.textOrange,
                bgcolor: colors.backgroundWhite,
                "&:hover": {
                  backgroundColor: colors.instaPic,
                  color: colors.textOrange,
                },
              }}
            >
              <KeyboardArrowLeft />
            </Button>

            <Button
              size="small"
              onClick={handleNext}
              sx={{
                position: "absolute",
                top: "50%",
                right: "-30px",
                transform: "translateY(-50%)",
                borderRadius: "100%",
                width: "40px",
                height: "40px",
                color: colors.textOrange,
                bgcolor: colors.backgroundWhite,
                "&:hover": {
                  backgroundColor: colors.instaPic,
                  color: colors.textOrange,
                },
              }}
            > */}
            {/* <KeyboardArrowRight />
            </Button> */}
          </Box>

          {/* ドットのステッパー */}
          <MobileStepper
            variant="dots"
            steps={pictures.length}
            position="static"
            activeStep={activeStep}
            backButton={
              ""
              //   <Button
              //     size="small"
              //     onClick={handleBack}
              //     sx={{
              //       color: colors.textOrange,
              //       position: "absolute",
              //       top: "50%",
              //       left: "-10px",
              //       transform: "translateY(-50%)",
              //       borderRadius: "100%",
              //       width: "40px",
              //       height: "40px",
              //       bgcolor: colors.backgroundWhite,
              //       "&:hover": {
              //         backgroundColor: colors.instaPic,
              //         color: colors.textOrange,
              //       },
              //     }}
              //   >
              //     <KeyboardArrowLeft />
              //   </Button>
            }
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                sx={{
                  color: colors.textOrange,
                  bgcolor: colors.backgroundWhite,
                  borderRadius: "50%",
                  width: "10%",
                  height: "13%",
                }}
              >
                <KeyboardArrowRight sx={{ width: "50%" }} />
              </Button>
            }
            sx={{
              maxWidth: 400,
              flexGrow: 1,
              color: colors.textOrange,
              bgcolor: colors.instaPic,
              "& .MuiMobileStepper-dot": {
                bgcolor: colors.textGray,
              },
              "& .MuiMobileStepper-dotActive": {
                bgcolor: colors.textOrange,
              },
              //   zIndex: 1,
            }}
          />
        </Box>
      </Paper>
    </>
  );
};
