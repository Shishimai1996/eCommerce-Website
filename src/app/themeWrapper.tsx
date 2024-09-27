"use client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
      h1: {
        fontWeight: "700",
        fontSize: "52px",
      },
      h2: {
        fontWeight: "700",
        fontSize: "40px",
      },
      h3: {
        fontWeight: "700",
        fontSize: "32px",
      },
      h4: {
        fontWeight: "700",
        fontSize: "24px",
      },
      h5: {
        fontWeight: "700",
        fontSize: "16px",
      },
      h6: {
        fontWeight: "600",
        fontSize: "24px",
      },
      h7: {
        fontWeight: "600",
        fontSize: "16px",
      },
      h8: {
        fontWeight: "500",
        fontSize: "18px",
      },
      h9: {
        fontWeight: "500",
        fontSize: "16px",
      },
      h10: {
        fontWeight: "500",
        fontSize: "14px",
      },
      body1: {
        fontWeight: "400",
        fontSize: "20px",
      },
      body2: {
        fontWeight: "400",
        fontSize: "16px",
      },
      body3: {
        fontWeight: "400",
        fontSize: "14px",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "Poppins",
            fontSize: "16px",
            backgroundColor: "#B88E2F",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#FFF3E3",
              color: "#B88E2F",
              borderColor: "#B88E2F",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            lineHeight: "21px",
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            fontWeight: 400,
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#000000",
        light: "#9F9F9F",
        dark: "#3A3A3A",
      },
      secondary: {
        main: "#ffffff",
        dark: "#666666",
        light: "#FFF3E3",
      },
      error: {
        main: "#E97171", // エラーカラー
      },
      warning: {
        main: "#B88E2F",
        light: "#FCF8F3",
        dark: "#B0B0B0",
      },
      success: {
        main: "#2EC1AC",
        light: "#F4F5F7",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
