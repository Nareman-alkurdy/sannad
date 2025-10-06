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
import { useGetFlashSales } from "../sevices/flaxhSales";

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

function FlashSales() {
  const {data} = useGetFlashSales()
  console.log(data , "data ");
    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        
        // فلترة حسب التصنيف إذا موجود
        const filtered = category
          ? data.filter((item) =>
              item.category.name.toLowerCase().includes(category.toLowerCase())
            )
          : data;

        setProducts(filtered);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    console.log(res , "res");
    fetchProducts();
  }, [category]);
  

  
  const endTimeRef = useRef(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(endTimeRef.current - Date.now());
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const isSmall = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(endTimeRef.current - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
        {/* عنوان و العداد على نفس السطر */}
        <Box display="flex" alignItems="center" gap={3}>
          <Typography variant="h5" fontWeight="bold" color="black">
            Flash Sales
          </Typography>

          {/* العداد بجانب العنوان */}
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
          <IconButton
            onClick={prevPage}
            sx={{
              width: 25,
              height: 25,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: 2,
              "&:hover": { borderColor: "#f44336", color: "#f44336", transform: "scale(1.1)" },
            }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>
          <IconButton
            onClick={nextPage}
            sx={{
              width: 25,
          
              height: 25,
            
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: 2,
              "&:hover": { borderColor: "#f44336", color: "#f44336", transform: "scale(1.1)" },
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* المنتجات مع حركة سلايد */}
      <Box position="relative" minHeight={250} mb={4}>
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
                image={item.image}
                price={item.price}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* زر */}
      <Box textAlign="center">
        <Button variant="contained" color="error" sx={{ px: 5, py:1.5, fontSize: "1rem" ,mb: 2}}>
          View All Products
        </Button>
      </Box>
    </Box>
  );
}

export default FlashSales;
