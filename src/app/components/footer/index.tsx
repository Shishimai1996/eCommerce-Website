"use client";

import { Box, Divider, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { useTheme } from "@mui/material/styles";

export const Footer: React.FC = (): React.JSX.Element => {
  const theme = useTheme();
  const commonColumnStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    [theme.breakpoints.down("md")]: {
      gap: "20px",
    },
  };

  const footerCategory = {
    link: ["Home", "Shop", "About", "Contact"],
    help: ["Payment Options", "Returns", "Privacy Policies"],
  };
  return (
    <Box bgcolor="secondary.main" position="relative">
      <Divider sx={{ color: "primary.light" }} />
      <Box
        sx={{
          display: "flex",
          mt: "3%",
          mb: "3%",
          justifyContent: "space-around",
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            ml: "5%",
            ...commonColumnStyles,
          }}
        >
          <Typography variant="h4" color="primary.main">
            Funiro.
          </Typography>
          <Typography variant="body2" color="primary.light">
            400 University Drive Suite 200 Coral <br />
            Gables, FL 33134 USA
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            [theme.breakpoints.down("md")]: {
              gap: 5,
              m: 5,
            },
          }}
        >
          <Box sx={commonColumnStyles}>
            <Typography color="primary.light" variant="h9">
              Links
            </Typography>
            {footerCategory.link.map((link, index) => (
              <Typography key={index} color="primary.main" variant="h9">
                {link}
              </Typography>
            ))}
          </Box>
          <Box sx={commonColumnStyles}>
            <Typography color="primary.light" variant="h9">
              Help
            </Typography>
            {footerCategory.help.map((help, index) => (
              <Typography key={index} color="primary.main" variant="h9">
                {help}
              </Typography>
            ))}
          </Box>
          <Box sx={commonColumnStyles}>
            <Typography color="primary.light" variant="h9">
              Newsletter
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                [theme.breakpoints.down("md")]: {
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            >
              <TextField
                label="Enter Your Email Address"
                id="standard-basic"
                variant="standard"
              />

              <Typography
                component={NextLink}
                href="#"
                variant="h10"
                color="primary.main"
                ml={2}
                sx={{
                  textDecoration: "underline",
                }}
              >
                SUBSCRIBE
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ color: "#9F9F9F" }} />
      <Box sx={{ ml: "8%", mt: "3%", mb: "3%" }}>
        <Typography variant="body2" color="primary.main">
          2023 furino. All rights reverved
        </Typography>
      </Box>
    </Box>
  );
};
