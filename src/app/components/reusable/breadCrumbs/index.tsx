"use client";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/navigation";
import { TProduct } from "@/productData";
import { Box } from "@mui/material";

export const Breadcrumb: React.FC<{ product?: TProduct; pathname: string }> = ({
  product,
  pathname,
}) => {
  const router = useRouter();
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push("/");
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="2" sx={{ color: "primary.light" }}>
      {pathname}
    </Typography>,
  ];
  return (
    <Stack spacing={3} direction="row" sx={{ alignItems: "center" }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};
