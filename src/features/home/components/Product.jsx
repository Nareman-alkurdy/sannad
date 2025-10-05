import React, { useState } from "react";
import { useCartStore } from "../../cart/store/cartStore";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Badge,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarIcon from "@mui/icons-material/Star";


function Product({
  title = "اسم المنتج",
  image = "/gamepad.png",
  price = 0,
  oldPrice = null,
  rating = 0,
  ratingCount = 0,
  discount = null,
}) {
  const [showButton, setShowButton] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleCardClick = () => {
    if (!showButton) {
      setShowButton(true); // عرض الزر فقط إذا لم يكن معروضًا
    }
  };

  const handleAddToCart = () => {
    addToCart({ title, image, price });
    setShowButton(false); // تأكد من تحديث الحالة لإخفاء الزر
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        width: 220,
        borderRadius: 3,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        position: "relative",
        overflow: "visible",
        cursor: "pointer",
      }}
    >
      {/* بانر الخصم */}
      {discount && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "error.main",
            color: "#fff",
            fontSize: 12,
            fontWeight: "bold",
            px: 1,
            py: 0.3,
            borderRadius: 1,
          }}
        >
          -{discount}%
        </Box>
      )}

      {/* أيقونات أعلى الصورة */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
          }}
        >
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
          }}
        >
          <VisibilityOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* صورة المنتج */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: 180, objectFit: "contain", p: 2 }}
      />

      {/* تفاصيل المنتج */}
      <CardContent sx={{ pt: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
          {title}
        </Typography>

        {/* السعر */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography color="error" sx={{ fontWeight: 600 }}>
            ${price}
          </Typography>
          {oldPrice && (
            <Typography
              sx={{
                color: "text.secondary",
                textDecoration: "line-through",
                fontSize: 14,
              }}
            >
              ${oldPrice}
            </Typography>
          )}
        </Box>

        {/* التقييم */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              fontSize="small"
              sx={{ color: i < Math.round(rating) ? "gold" : "lightgray" }}
            />
          ))}
          <Typography variant="body2" sx={{ ml: 0.5, color: "text.secondary" }}>
            ({ratingCount})
          </Typography>
        </Box>
      </CardContent>

      {/* زر الإضافة إلى السلة */}
      {showButton && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <IconButton
            onClick={handleAddToCart}
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "5px 10px",
              fontSize: "12px",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Add to Cart
          </IconButton>
        </Box>
      )}
    </Card>
  );
}
export default Product;