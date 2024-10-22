"use client";

import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import library1 from "@public/images/library1.png";
import library2 from "@public/images/library2.png";
import library3 from "@public/images/library3.png";
import library4 from "@public/images/library4.png";
import library5 from "@public/images/library5.png";
import library6 from "@public/images/library6.png";
import library7 from "@public/images/library7.png";
import library8 from "@public/images/library8.png";
import library9 from "@public/images/library9.png";
import Image from "next/image";

export const PictureLibrary = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            top: 0,
            right: "42.5%",
            [theme.breakpoints.down("md")]: {
              right: "10%",
              top: 5,
            },
          }}
        >
          <Typography variant="h6" color="primary.dark">
            Share your setup with
          </Typography>
          <Typography variant="h2" color="primary.dark">
            #FuniroFurniture
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, mt: "10%", mb: "5%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4.5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "20px",
                  left: 0,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "5%",
                  }}
                >
                  <Image src={library1} alt={"library1"} />

                  <Image src={library3} alt={"library3"} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "5%",
                  }}
                >
                  <Image src={library2} alt={"library2"} />

                  <Image src={library4} alt={"library4"} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={7} md={2.5}>
              <Box
                sx={{
                  marginTop: isSmallScreen ? 0 : "50%",
                }}
              >
                <Image src={library5} alt={"library5"} />
              </Box>
            </Grid>
            <Grid item xs={8} md={4.5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "20px",
                  right: 0,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "5%",
                  }}
                >
                  <Image src={library7} alt={"library7"} />

                  <Image src={library9} alt={"library9"} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "5%",
                  }}
                >
                  <Image src={library6} alt={"library6"} />

                  <Image src={library8} alt={"library8"} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
