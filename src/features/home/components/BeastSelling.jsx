// import React, { useState } from "react";
// import { Box, Typography, Button, useMediaQuery } from "@mui/material";
// import Product from "../components/Product";

// // المنتجات الأساسية
// const best = [
//   { id: 1, name: "Bag", price: 49, img: "https://via.placeholder.com/200" },
//   { id: 2, name: "Shoes", price: 89, img: "https://via.placeholder.com/200" },
//   { id: 3, name: "Watch", price: 120, img: "https://via.placeholder.com/200" },
//   { id: 4, name: "Dog Toy", price: 15, img: "https://via.placeholder.com/200" },
// ];

// // كل المنتجات لإظهارها عند الضغط على الزر
// const allProducts = [
//   ...best,
//   { id: 5, name: "Hat", price: 25, img: "https://via.placeholder.com/200" },
//   { id: 6, name: "Sunglasses", price: 70, img: "https://via.placeholder.com/200" },
//   { id: 7, name: "Belt", price: 30, img: "https://via.placeholder.com/200" },
//   { id: 8, name: "Gloves", price: 20, img: "https://via.placeholder.com/200" },
// ];

// const BestSelling = () => {
//   const isSmall = useMediaQuery("(max-width:600px)");
//   const [showAll, setShowAll] = useState(false);

//   const handleToggleProducts = () => {
//     setShowAll(prev => !prev);
//   };

//   const productsToShow = showAll ? allProducts : best;

//   return (
//     <section className="my-10">
//       {/* العنوان مع المربع والكلمة الصغيرة والزر */}
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         mb={3}
//         flexWrap={isSmall ? "wrap" : "nowrap"}
//       >
//         <Box>
//           <Box display="flex" alignItems="center" mb={0.5} gap={1}>
//             <Box sx={{ width: 10, height: 10, bgcolor: "error.main", borderRadius: 0.5 }} />
//             <Typography variant="caption" fontSize={12} color="textSecondary">
//               This Month
//             </Typography>
//           </Box>
//           <Typography variant="h5" fontWeight="bold">
//             Best Selling Products
//           </Typography>
//         </Box>

//         <Button
//           onClick={handleToggleProducts}
//           sx={{
//             backgroundColor: "error.main",
//             color: "#fff",
//             padding: "8px 20px",
//             fontSize: "14px",
//             borderRadius: 1,
//             mt: isSmall ? 2 : 0,
//             "&:hover": { backgroundColor: "#d32f2f" },
//           }}
//         >
//           {showAll ? "Show Less" : "View All"}
//         </Button>
//       </Box>

//       {/* المنتجات */}
//       <Box
//         display="grid"
//         gridTemplateColumns={isSmall ? "repeat(2, 1fr)" : "repeat(4, 1fr)"}
//         gap={3}
//       >
//         {productsToShow.map((p) => (
//           <Product
//             key={p.id}
//             title={p.name}
//             image={p.img}
//             price={p.price}
//           />
//         ))}
//       </Box>
//     </section>
//   );
// };

// export default BestSelling;





import React, { useEffect, useState } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import Product from "../components/Product";

const BestSelling = () => {
  const isSmall = useMediaQuery("(max-width:600px)");
  const [showAll, setShowAll] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=8");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching best selling products:", err);
      }
    };

    fetchProducts();
  }, []);

  const productsToShow = showAll ? products : products.slice(0, 4);

  return (
    <section className="my-10">
      {/* العنوان والزر */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        flexWrap={isSmall ? "wrap" : "nowrap"}
      >
        <Box>
          <Box display="flex" alignItems="center" mb={0.5} gap={1}>
            <Box sx={{ width: 10, height: 10, bgcolor: "error.main", borderRadius: 0.5 }} />
            <Typography variant="caption" fontSize={12} color="textSecondary">
              This Month
            </Typography>
          </Box>
          <Typography variant="h5" fontWeight="bold">
            Best Selling Products
          </Typography>
        </Box>

        <Button
          onClick={() => setShowAll((prev) => !prev)}
          sx={{
            backgroundColor: "error.main",
            color: "#fff",
            padding: "8px 20px",
            fontSize: "14px",
            borderRadius: 1,
            mt: isSmall ? 2 : 0,
            "&:hover": { backgroundColor: "#d32f2f" },
          }}
        >
          {showAll ? "Show Less" : "View All"}
        </Button>
      </Box>

      {/* المنتجات */}
      <Box
        display="grid"
        gridTemplateColumns={isSmall ? "repeat(2, 1fr)" : "repeat(4, 1fr)"}
        gap={3}
      >
        {productsToShow.map((p) => (
          <Product
            key={p.id}
            title={p.title}
            image={p.images?.[0] || "/placeholder.png"}
            price={p.price}
          />
        ))}
      </Box>
    </section>
  );
};

export default BestSelling;







