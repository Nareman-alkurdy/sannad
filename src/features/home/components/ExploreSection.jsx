import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material"; 
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Product from "../components/Product";

const productsData = [
  { id: 1, title: "Product 1", image: "/img1.png", price: 100 },
  { id: 2, title: "Product 2", image: "/img2.png", price: 120 },
  { id: 3, title: "Product 3", image: "/img3.png", price: 90 },
  { id: 4, title: "Product 4", image: "/img4.png", price: 80 },
  { id: 5, title: "Product 5", image: "/img5.png", price: 110 },
  { id: 6, title: "Product 6", image: "/img6.png", price: 95 },
  { id: 7, title: "Product 7", image: "/img7.png", price: 130 },
  { id: 8, title: "Product 8", image: "/img8.png", price: 105 },
  { id: 9, title: "Product 9", image: "/img3.png", price: 90 },
  { id: 10, title: "Product 10", image: "/img4.png", price: 80 },
  { id: 11, title: "Product 11", image: "/img5.png", price: 110 },
  { id: 12, title: "Product 12", image: "/img6.png", price: 95 },
  { id: 13, title: "Product 13", image: "/img7.png", price: 130 },
  { id: 14, title: "Product 14", image: "/img8.png", price: 105 },
];

function ExploreSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const isSmall = useMediaQuery("(max-width:600px)");

  const productsPerPage = isSmall ? 2 : 4;
  const totalPages = Math.ceil(productsData.length / productsPerPage);
  const startIdx = page * productsPerPage;
  const visibleProducts = productsData.slice(startIdx, startIdx + productsPerPage);

  const nextPage = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <Box my={6} sx={{ background: "#fff", borderRadius: 2, p: 4, boxShadow: 2 }}>
      {/* عنوان صغير */}
      <Box display="flex" alignItems="center" mb={2} gap={1}>
        <Box sx={{ width: 10, height: 10, bgcolor: "error.main", borderRadius: 1 }} />
        <Typography variant="caption" color="error" fontWeight="bold">
          Today's
        </Typography>
      </Box>

      {/* العنوان + الأسهم */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          Explore Our Products
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <IconButton
            onClick={prevPage}
            sx={{
              width: 36,
              height: 36,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: 2,
              "&:hover": {
                borderColor: "#f44336",
                color: "#f44336",
                transform: "scale(1.1)",
              },
            }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>
          <IconButton
            onClick={nextPage}
            sx={{
              width: 36,
              height: 36,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: 2,
              "&:hover": {
                borderColor: "#f44336",
                color: "#f44336",
                transform: "scale(1.1)",
              },
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* المنتجات كسطرين منفصلين */}
      <Box display="flex" flexDirection="column" gap={4} position="relative" minHeight={300}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {[...Array(2)].map((_, rowIdx) => (
              <Box
                key={rowIdx}
                display="grid"
                gridTemplateColumns={isSmall ? "repeat(2, 1fr)" : "repeat(4, 1fr)"}
                gap={3}
              >
                {visibleProducts.map((item) => (
                  <Box
                    key={`${item.id}-${rowIdx}`}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      boxShadow: 1,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": { transform: "translateY(-5px)", boxShadow: 4 },
                      background: "#fff",
                    }}
                  >
                    <Product title={item.title} image={item.image} price={item.price} />
                  </Box>
                ))}
              </Box>
            ))}
          </motion.div>
        </AnimatePresence>
      </Box>

      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="error" sx={{ px: 5, py: 1.5 }}>
          View All Products
        </Button>
      </Box>
    </Box>
  );
}

export default ExploreSection;
