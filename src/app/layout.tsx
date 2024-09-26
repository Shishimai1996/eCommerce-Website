import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AppBarHeader } from "./components/appBarHeader";
import { Footer } from "./components/footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   // src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Poppins",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [yellowtail],
        },
      },
    },
  });
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
            <AppBarHeader />
            <Box component="main" sx={{ flexGrow: 0, mt: 8 }}>
              <Box>{children}</Box>
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
