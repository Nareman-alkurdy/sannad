import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  Rating,
  IconButton,
} from "@mui/material";
import { AddShoppingCart, Favorite } from "@mui/icons-material";

const JustForYou = () => {
  const products = [
    {
      id: 1,
      name: "ASUS FHD Gaming Laptop",
      originalPrice: 1160,
      discountedPrice: 960,
      discount: 35,
      rating: 5,
      reviews: 65,
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: 1960,
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      name: "GPU Shooter USB Gamepad",
      price: 550,
      image: "/api/placeholder/300/200",
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: 750,
      image: "/api/placeholder/300/200",
    },
    {
      id: 5,
      name: "IPS LCD Gaming Monitor",
      price: 1160,
      rating: 5,
      reviews: 65,
      image: "/api/placeholder/300/200",
    },
    {
      id: 6,
      name: "HAVIT HV-692 Gamepad",
      price: 560,
      rating: 5,
      reviews: 65,
      image: "/api/placeholder/300/200",
    },
    {
      id: 7,
      name: "AK-900 Wired Keyboard",
      price: 200,
      rating: 5,
      reviews: 65,
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          Just For You
        </Typography>
        <Button variant="outlined" color="primary">
          See All
        </Button>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                {product.discount && (
                  <Chip
                    label={`${product.discount}%`}
                    color="secondary"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      fontWeight: "bold",
                    }}
                  />
                )}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "grey.100" },
                  }}
                >
                  <Favorite color="error" />
                </IconButton>
              </Box>

              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {product.name}
                </Typography>

                {product.rating && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Rating value={product.rating} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      ({product.reviews})
                    </Typography>
                  </Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                    mt: "auto",
                  }}
                >
                  {product.discountedPrice ? (
                    <>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontWeight: "bold" }}
                      >
                        ${product.discountedPrice}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textDecoration: "line-through" }}
                      >
                        ${product.originalPrice}
                      </Typography>
                    </>
                  ) : (
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      ${product.price}
                    </Typography>
                  )}
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<AddShoppingCart />}
                  sx={{
                    backgroundColor: "primary.main",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Add To Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JustForYou;
