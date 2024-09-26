"use client";

import { Box, Divider, TextField, Typography } from "@mui/material";
import React, { useState, MouseEvent } from "react";
import { colors } from "@/styles/tokens/colors";
import { fonts } from "@/styles/fonts/fonts";
import NextLink from "next/link";

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
    <>
      <Box bgcolor={colors.backgroundWhite} position="relative">
        <Divider sx={{ color: colors.divider }} />
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
            <Typography sx={fonts.h5} color={colors.textPrimary}>
              Funiro.
            </Typography>
            <Typography sx={fonts.body1} color={colors.textGray}>
              400 University Drive Suite 200 Coral <br />
              Gables, FL 33134 USA
            </Typography>
          </Box>
          <Box sx={commonColumnStyles}>
            <Typography color={colors.textGray} sx={fonts.h6}>
              Links
            </Typography>
            {footerCategory.link.map((link, index) => (
              <Typography key={index} color={colors.textPrimary} sx={fonts.h6}>
                {link}
              </Typography>
            ))}
          </Box>
          <Box sx={commonColumnStyles}>
            <Typography color={colors.textGray} sx={fonts.h6}>
              Help
            </Typography>
            {footerCategory.help.map((help, index) => (
              <Typography key={index} color={colors.textPrimary} sx={fonts.h6}>
                {help}
              </Typography>
            ))}
          </Box>
          <Box sx={commonColumnStyles}>
            <Typography color={colors.textGray} sx={fonts.h6}>
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
                sx={fonts.h7}
                color={colors.textPrimary}
                ml={2}
              >
                SUBSCRIBE
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ color: colors.divider }} />
        <Box sx={{ ml: "8%", mt: "3%", mb: "3%" }}>
          <Typography sx={fonts.body1} color={colors.textPrimary}>
            2023 furino. All rights reverved
          </Typography>
        </Box>
      </Box>
    </>
  );
};
