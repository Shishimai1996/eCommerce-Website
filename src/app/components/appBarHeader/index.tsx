"use client";

import React, { useState, MouseEvent } from "react";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import houseLogo from "@public/images/houseLogo.png";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { ShoppingCartButton } from "../shoppingCartButton";
import { fonts } from "@/styles/fonts/fonts";

export const pages: {
  name: string;
  path: string;
}[] = [];

export const settings = ["logout"];

export const commonButtonStyles = {
  my: 2,
  display: "block",
  textDecoration: "none",
  transition: "background-color 0.3s",
};

export const activeButtonStyles = {
  ...commonButtonStyles,
  backgroundColor: "#FFFFFF",
  color: "primary.contrast",
  [`&:hover`]: {
    backgroundColor: "#FFFFFF",
  },
};

export const defaultButtonStyles = {
  ...commonButtonStyles,
  color: "primary.contrast",
  [`&:hover`]: {
    backgroundColor: "#FFFFFF",
  },
};
const Title: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <>
    <Image width={30} height={30} alt="logomark" src={houseLogo} />
    <Typography
      variant={isMobile ? "h4" : "h3"}
      noWrap
      sx={{
        mx: 1.5,
        display: "flex",
        flexGrow: isMobile ? 1 : 0,
        color: "#000000",
      }}
    >
      Furniro
    </Typography>
  </>
);

const DesktopView: React.FC<{
  pathname: string;
  handleCloseNavMenu: () => void;
}> = ({ pathname, handleCloseNavMenu }) => {
  console.log("pathname", pathname);
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {/* {pages.map((page) => (
        <Button
          key={`${page.name}_item`}
          onClick={handleCloseNavMenu}
          sx={
            pathname.includes(page.path)
              ? activeButtonStyles
              : defaultButtonStyles
          }
          href={page.path}
        >
          {page.name}
        </Button>
      ))} */}
    </Box>
  );
};

const MobileView: React.FC<{
  handleOpenNavMenu: (event: MouseEvent<HTMLElement>) => void;
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: () => void;
}> = ({ handleOpenNavMenu, anchorElNav, handleCloseNavMenu }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        data-testid="navMenuButton"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={`${page.name}_item`} onClick={handleCloseNavMenu}>
            <Link href={page.path}>
              <Typography textAlign="center">{page.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export const AppBarHeader: React.FC = (): React.JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const pathname = usePathname();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box px={3} maxWidth="100%">
        <Toolbar disableGutters>
          {isMobile ? (
            <>
              {/* <MobileView
                handleOpenNavMenu={handleOpenNavMenu}
                anchorElNav={anchorElNav}
                handleCloseNavMenu={handleCloseNavMenu}
              /> */}

              <Title isMobile={isMobile} />
            </>
          ) : (
            <>
              <Title isMobile={isMobile} />

              <DesktopView
                pathname={pathname}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            </>
          )}
          <ShoppingCartButton />
        </Toolbar>
      </Box>
    </AppBar>
  );
};
