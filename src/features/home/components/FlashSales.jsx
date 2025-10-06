import React, { useState, useEffect, useRef } from "react";
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

function FlashSales() {
  const endTimeRef = useRef(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(endTimeRef.current - Date.now());
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const isSmall = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(endTimeRef.current - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const productsPerPage = isSmall ? 2 : 4;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIdx = page * productsPerPage;
  const visibleProducts = products.slice(startIdx, startIdx + productsPerPage);

  const nextPage = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((timeLeft % (1000 * 60)) / 1000));

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
      {/* الكلمة الحمراء فوق العنوان */}
      <Box display="flex" alignItems="center" mb={1}>
        <Box sx={{ width: 10, height: 10, bgcolor: "error.main", borderRadius: 1, mr: 1 }} />
        <Typography variant="caption" color="error" fontWeight="bold">
          Today's
        </Typography>
      </Box>

      {/* العنوان + العداد + الأسهم */}
      <Box
        display="flex"
        flexDirection={isSmall ? "column" : "row"}
        alignItems={isSmall ? "flex-start" : "center"}
        justifyContent="space-between"
        gap={2}
        mb={4}
      >
        <Box display="flex" alignItems="center" gap={3}>
          <Typography variant="h5" fontWeight="bold" color="black">
            Flash Sales
          </Typography>

          <Box display="flex" alignItems="center" gap={2}>
            {[{ label: "Days", value: days }, { label: "Hours", value: hours }, { label: "Minutes", value: minutes }, { label: "Seconds", value: seconds }].map((item) => (
              <Box key={item.label} display="flex" flexDirection="column" alignItems="center">
                <Typography variant="caption" fontWeight="bold" color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="black">
                  {item.value.toString().padStart(2, "0")}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* الأسهم */}
        <Box display="flex" alignItems="center" gap={1} mt={isSmall ? 2 : 0}>
          <IconButton onClick={prevPage} sx={{ width: 25, height: 25, backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: 2, "&:hover": { borderColor: "#f44336", color: "#f44336", transform: "scale(1.1)" } }}>
            <ArrowBackIosNew fontSize="small" />
          </IconButton>
          <IconButton onClick={nextPage} sx={{ width: 25, height: 25, backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: 2, "&:hover": { borderColor: "#f44336", color: "#f44336", transform: "scale(1.1)" } }}>
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* المنتجات مع حركة سلايد */}
      <Box position="relative" minHeight={250} mb={4}>
        {loading ? (
          <Typography>Loading products...</Typography>
        ) : (
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                display: "grid",
                gridTemplateColumns: isSmall ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                gap: "16px",
                position: "absolute",
                width: "100%",
              }}
            >
              {visibleProducts.map((item) => (
                <Product
                  key={item.id}
                  title={item.title}
                  image={item.images?.[0] || "/placeholder.png"}
                  price={item.price}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </Box>

      {/* زر */}
      <Box textAlign="center">
        <Button variant="contained" color="error" sx={{ px: 5, py: 1.5, fontSize: "1rem", mb: 2 }}>
          View All Products
        </Button>
      </Box>
    </Box>
  );
}

export default FlashSales;

