"use client";

import { Box, Divider, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";

export const Footer: React.FC = (): React.JSX.Element => {
  const commonColumnStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  };

  const footerCategory = {
    link: ["Home", "Shop", "About", "Contact"],
    help: ["Payment Options", "Returns", "Privacy Policies"],
  };
  return (
    <Box bgcolor="secondary.main" position="relative">
      <Divider sx={{ color: "#9F9F9F" }} />
      <Box
        sx={{
          display: "flex",
          mt: "3%",
          mb: "3%",
          justifyContent: "space-around",
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              label="Enter Your Email Address"
              id="standard-basic"
              variant="standard"
              inputProps={{
                sx: {
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                },
              }}
            />
            <Typography
              component={NextLink}
              href="#"
              variant="h10"
              color="primary.main"
              ml={2}
            >
              SUBSCRIBE
            </Typography>
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
