"use client";

import { TProduct } from "@/productData";
import { cartStore } from "@/store/shoppingStore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { observer } from "mobx-react-lite";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

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
        color: "secondary.main",
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
  <Button
    sx={{
      bgcolor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
        color: "secondary.main",
        borderColor: "transparent",
      },
    }}
  >
    <Icon />
    {label}
  </Button>
);

export const ProductCard: React.FC<{ product: TProduct }> = observer(
  ({ product }) => {
    const badge = product.discount
      ? {
          badgeContent: `${-product.discount * 100}%`,
          badgeColor: "error.main",
        }
      : product.new
      ? { badgeContent: "New", badgeColor: "success.main" }
      : null;

    const handleAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      cartStore.addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.img,
      });
    };
    const router = useRouter();
    const openProductDetail = (product: TProduct) => {
      router.push(`/${product.id}`);
    };

    return (
      <Card
        sx={{
          maxWidth: "285px",
          maxHeight: "446px",
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
            zIndex: 7,
          }}
          onClick={() => openProductDetail(product)}
        >
          <Button
            variant="contained"
            sx={{
              width: "202px",
              bgcolor: "secondary.main",
              color: "warning.main",
              borderRadius: 0,
            }}
            onClick={handleAddCart}
          >
            Add to cart
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "5%",
            }}
          >
            <ActionButton icon={ShareIcon} label="Share" />
            <ActionButton icon={SyncAltIcon} label="Compare" />
            <ActionButton icon={FavoriteBorderIcon} label="Like" />
          </Box>
        </Box>

        <CardContent sx={{ bgcolor: "success.light" }}>
          <Typography gutterBottom variant="h6">
            {product.title}
          </Typography>
          <Typography sx={{ color: "text.secondary" }} variant="h9">
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
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Rp {new Intl.NumberFormat("ja-JP").format(product.price)}
            </Typography>
            {product.discount ? (
              <Typography
                variant="body2"
                color="warning.dark"
                sx={{
                  textDecoration: "line-through",
                }}
              >
                Rp{" "}
                {new Intl.NumberFormat("ja-JP").format(
                  Math.round(product.price / (1 - product.discount))
                )}
              </Typography>
            ) : null}
          </Box>
        </CardContent>
      </Card>
    );
  }
);
