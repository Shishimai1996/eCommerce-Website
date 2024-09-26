"use client";

import { TProduct } from "@/productData";
import { fonts } from "@/styles/fonts/fonts";
import { colors } from "@/styles/tokens/colors";
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface BadComponentProps {
  badgeContent: string | null;
  badgeColor: string;
  children: React.ReactNode;
}
const BadgeComponent: React.FC<BadComponentProps> = ({
  badgeContent,
  badgeColor,
  children,
}) => (
  <Badge
    badgeContent={badgeContent}
    color="error"
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    sx={{
      "& .MuiBadge-badge": {
        backgroundColor: badgeColor,
        color: colors.backgroundWhite,
        fontSize: "16px",
        padding: "5px",
        borderRadius: "50%",
        height: "48px",
        minWidth: "48px",
        mt: "30px",
        mr: "30px",
      },
    }}
  >
    {children}
  </Badge>
);

interface ActionButtonProps {
  icon: React.ElementType;
  label: string;
}
const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, label }) => (
  <Button sx={{ color: colors.backgroundWhite, ...fonts.h4 }}>
    <Icon />
    {label}
  </Button>
);

export const ProductCard: React.FC<{ product: TProduct }> = ({ product }) => {
  const badge = product.discount
    ? {
        badgeContent: `${-product.discount * 100}%`,
        badgeColor: colors.discountBadge,
      }
    : product.new
    ? { badgeContent: "New", badgeColor: colors.newBadge }
    : null;

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 0,
        position: "relative",
        overflow: "visible",
        "&:hover .hoverButton": { opacity: 1 },
      }}
    >
      <Box sx={{ position: "relative", width: "285px", height: "301px" }}>
        {badge ? (
          <BadgeComponent
            badgeContent={badge.badgeContent}
            badgeColor={badge.badgeColor}
          >
            <CardMedia
              component="img"
              image={product.img}
              alt="product"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              title={product.title}
            />
          </BadgeComponent>
        ) : (
          <CardMedia
            component="img"
            image={product.img}
            alt="product"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            title={product.title}
          />
        )}
      </Box>

      <Box
        className="hoverButton"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.3s ease",
          bgcolor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "202px",
            ...fonts.h4,
            bgcolor: colors.backgroundWhite,
            color: colors.textOrange,
            "&:hover": {
              bgcolor: colors.cardBackground,
            },
          }}
        >
          Add to cart
        </Button>
        <Box sx={{ display: "flex", flexDirection: "row", m: "5%" }}>
          <ActionButton icon={ShareIcon} label="Share" />
          <ActionButton icon={SyncAltIcon} label="Compare" />
          <ActionButton icon={FavoriteBorderIcon} label="Like" />
        </Box>
      </Box>

      <CardContent sx={{ bgcolor: colors.productCard }}>
        <Typography gutterBottom sx={fonts.h10}>
          {product.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", ...fonts.h6 }}>
          {product.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "text.secondary", ...fonts.h10 }}>
            Rp {product.price}
          </Typography>
          {product.discount ? (
            <Typography
              sx={{
                color: colors.originaLPrice,
                textDecoration: "line-through",
                ...fonts.body1,
                fontSize: "20px",
              }}
            >
              Rp {(product.price / (1 - product.discount)).toFixed(0)}
            </Typography>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
};
