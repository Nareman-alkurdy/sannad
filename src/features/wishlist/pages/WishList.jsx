import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  IconButton,
  Stack,
  Container
} from '@mui/material';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import JustForYou from '../components/JustForYou';

const wishlistItems = [
  {
    id: 1,
    name: 'Gucci duffle bag',
    originalPrice: 1160,
    discountedPrice: 960,
    discount: 35,
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    name: 'RGB liquid CPU Cooler',
    originalPrice: 1960,
    discountedPrice: 1560,
    discount: 20,
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    name: 'GPU Shooter USB Gamepad',
    originalPrice: 650,
    discountedPrice: 550,
    discount: 15,
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    name: 'Quilted Satin Jacket',
    originalPrice: 950,
    discountedPrice: 750,
    discount: 21,
    image: '/api/placeholder/400/300'
  }
];

export default function WishList() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
        px: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* عنوان الصفحة */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 5,
          fontWeight: 'bold',
          alignSelf: 'flex-start',
          textAlign: 'left',
          color: 'text.primary'
        }}
      >
        Wishlist ({wishlistItems.length})
      </Typography>

      {/* محتوى قائمة المفضلة */}
      {wishlistItems.length === 0 ? (
        <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 200 }}>
          <Typography color="text.secondary">No items in your wishlist yet.</Typography>
        </Stack>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {wishlistItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card
                sx={{
                  position: 'relative',
                  height: 440,
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      objectFit: 'cover'
                    }}
                  />
                  <Chip
                    label={`-${item.discount}%`}
                    color="secondary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      fontWeight: 'bold'
                    }}
                  />
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: 'white',
                      '&:hover': { backgroundColor: 'grey.100' }
                    }}
                  >
                    <Favorite color="error" />
                  </IconButton>
                </Box>

                <CardContent>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    {item.name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 'bold', color: 'primary.main' }}
                    >
                      ${item.discountedPrice}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: 'line-through' }}
                    >
                      ${item.originalPrice}
                    </Typography>
                  </Box>

                  {/* زر Add to Cart باللون الأحمر */}
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<AddShoppingCart />}
                    sx={{
                      backgroundColor: '#d32f2f',
                      '&:hover': { backgroundColor: '#b71c1c' },
                      borderRadius: 2,
                      fontWeight: 'bold'
                    }}
                  >
                    Add To Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* قسم المقترحات */}
      <Box sx={{ mt: 8, width: '100%' }}>
        <JustForYou />
      </Box>
    </Container>
  );
}
