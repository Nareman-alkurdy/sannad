
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function NewArrival() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      {/* === Header === */}
      <Box sx={{ textAlign: "left", mb: 4 }}>
        

        {/* Featured label with small red square */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: "red",
              borderRadius: "2px",
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: "red",
              fontWeight: 500,
              textTransform: "uppercase",
              fontSize: 12,
            }}
          >
            Featured
          </Typography>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "blak", 
            lineHeight: 1.2,
          }}
        >
          New Arrival
        </Typography>
      </Box>

      {/* === Photos Section === */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "nowrap",
          alignItems: "stretch",
          justifyContent: "space-between",
        }}
      >
        {/* === Left Large Image === */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            minHeight: 300,
            backgroundColor: "#000", // black background
          }}
        >
          <img
            src="src/assets/ps5-slim-goedkope-playstation_large 1@3x.png"
            alt="PlayStation 5"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              color: "#fff",
              width: "70%",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: 14,
                mb: 0.5,
                fontWeight: 500,
                borderBottom: "1.5px solid #fff",
                pb: 0.5,
              }}
            >
              Black and White version of the PS5 coming out on sale.
            </Typography>
            <Button
              variant="text"
              sx={{
                color: "#fff",
                fontSize: 13,
                textTransform: "none",
                borderBottom: "1.5px solid #fff",
                px: 0,
                mt: 1,
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>

        {/* === Right Column (3 images stacked) === */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Top Image (woman) */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              flex: 1,
              aspectRatio: "16/9",
              backgroundColor: "#000", // black background
            }}
          >
            <img
              src="src/assets/imges/attractive-woman-wearing-hat-posing-black-background 1.png"
              alt="Women's Collection"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 12,
                left: 12,
                color: "#fff",
                width: "80%",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: 13,
                  mb: 0.5,
                  fontWeight: 500,
                  borderBottom: "1.5px solid #fff",
                  pb: 0.5,
                }}
              >
                Featured woman collections that give you another vibe.
              </Typography>
              <Button
                variant="text"
                sx={{
                  color: "#fff",
                  fontSize: 13,
                  textTransform: "none",
                  borderBottom: "1.5px solid #fff",
                  px: 0,
                  mt: 1,
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>

          {/* Bottom Two Images Row */}
          <Box sx={{ display: "flex", gap: 3, flex: 1 }}>
            {/* Speakers */}
            <Box
              sx={{
                flex: 1,
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#000", // black background
              }}
            >
              <img
                src="src/assets/imges/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1@2x.png"
                alt="Speakers"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  color: "#fff",
                  width: "85%",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 12,
                    mb: 0.5,
                    fontWeight: 500,
                    borderBottom: "1.5px solid #fff",
                    pb: 0.5,
                  }}
                >
                  Amazon wireless speakers.
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    fontSize: 12,
                    textTransform: "none",
                    borderBottom: "1.5px solid #fff",
                    px: 0,
                    mt: 1,
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>

            {/* Perfume */}
            <Box
              sx={{
                flex: 1,
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#000", // black background
              }}
            >
              <img
                src="src/assets/imges/652e82cd70aa6522dd785109a455904c@2x.png"
                alt="Perfume"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  color: "#fff",
                  width: "85%",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 12,
                    mb: 0.5,
                    fontWeight: 500,
                    borderBottom: "1.5px solid #fff",
                    pb: 0.5,
                  }}
                >
                  GUCCI INTENSE OUD EDP
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    fontSize: 12,
                    textTransform: "none",
                    borderBottom: "1.5px solid #fff",
                    px: 0,
                    mt: 1,
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* === Icons Section === */}
      <Grid
  container
  spacing={4}
  sx={{
    mt: 8,
    textAlign: "center",
    justifyContent: "center",
  }}
>
  <Grid item xs={12} sm={4}>
    <Box
      sx={{
        backgroundColor: "#ccc", 
        borderRadius: "50%",
        width: 80, 
        height: 80,
        mx: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000", 
          color: "#fff",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LocalShippingIcon sx={{ fontSize: 30 }} />
      </Box>
    </Box>

    <Typography variant="subtitle1" fontWeight="bold">
      Fast Delivery
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Get your items quickly and safely
    </Typography>
  </Grid>

  <Grid item xs={12} sm={4}>
    <Box
      sx={{
        backgroundColor: "#ccc",
        borderRadius: "50%",
        width: 80,
        height: 80,
        mx: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeadsetMicIcon sx={{ fontSize: 30 }} />
      </Box>
    </Box>

    <Typography variant="subtitle1" fontWeight="bold">
      24/7 Support
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Always here to help you
    </Typography>
  </Grid>

  <Grid  span={4}>
    <Box
      sx={{
        backgroundColor: "#ccc",
        borderRadius: "50%",
        width: 80,
        height: 80,
        mx: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <VerifiedUserIcon sx={{ fontSize: 30 }} />
      </Box>
    </Box>

    <Typography variant="subtitle1" fontWeight="bold">
      Secure Shopping
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Your data is safe with us
    </Typography>
  </Grid>
</Grid>

    </Box>
  );
}





// import React, { useEffect, useState } from "react";
// import { Box, Typography, Button, Grid } from "@mui/material";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

// export default function NewArrival() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchNewArrivals = async () => {
//       try {
//         const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=4");
//         const data = await res.json();
//         setProducts(data);
//       } catch (err) {
//         console.error("Error fetching new arrivals:", err);
//       }
//     };

//     fetchNewArrivals();
//   }, []);

//   return (
//     <Box sx={{ p: { xs: 2, md: 6 } }}>
//       {/* === Header === */}
//       <Box sx={{ textAlign: "left", mb: 4 }}>
//         <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
//           <Box sx={{ width: 10, height: 10, backgroundColor: "red", borderRadius: "2px" }} />
//           <Typography variant="caption" sx={{ color: "red", fontWeight: 500, textTransform: "uppercase", fontSize: 12 }}>
//             Featured
//           </Typography>
//         </Box>
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", lineHeight: 1.2 }}>
//           New Arrival
//         </Typography>
//       </Box>

//       {/* === Photos Section === */}
//       <Box sx={{ display: "flex", gap: 3, flexWrap: "nowrap", alignItems: "stretch", justifyContent: "space-between" }}>
//         {products.length >= 4 ? (
//           <>
//             {/* Left Large Image */}
//             <Box sx={{ flex: 1, position: "relative", borderRadius: 2, overflow: "hidden", minHeight: 300, backgroundColor: "#000" }}>
//               <img src={products[0].images?.[0]} alt={products[0].title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//               <Box sx={{ position: "absolute", bottom: 16, left: 16, color: "#fff", width: "70%" }}>
//                 <Typography variant="body2" sx={{ fontSize: 14, mb: 0.5, fontWeight: 500, borderBottom: "1.5px solid #fff", pb: 0.5 }}>
//                   {products[0].description}
//                 </Typography>
//                 <Button variant="text" sx={{ color: "#fff", fontSize: 13, textTransform: "none", borderBottom: "1.5px solid #fff", px: 0, mt: 1 }}>
//                   Shop Now
//                 </Button>
//               </Box>
//             </Box>

//             {/* Right Column */}
//             <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
//               {/* Top Image */}
//               <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden", flex: 1, aspectRatio: "16/9", backgroundColor: "#000" }}>
//                 <img src={products[1].images?.[0]} alt={products[1].title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//                 <Box sx={{ position: "absolute", bottom: 12, left: 12, color: "#fff", width: "80%" }}>
//                   <Typography variant="body2" sx={{ fontSize: 13, mb: 0.5, fontWeight: 500, borderBottom: "1.5px solid #fff", pb: 0.5 }}>
//                     {products[1].description}
//                   </Typography>
//                   <Button variant="text" sx={{ color: "#fff", fontSize: 13, textTransform: "none", borderBottom: "1.5px solid #fff", px: 0, mt: 1 }}>
//                     Shop Now
//                   </Button>
//                 </Box>
//               </Box>

//               {/* Bottom Two Images */}
//               <Box sx={{ display: "flex", gap: 3, flex: 1 }}>
//                 {[products[2], products[3]].map((item, idx) => (
//                   <Box key={idx} sx={{ flex: 1, position: "relative", borderRadius: 2, overflow: "hidden", backgroundColor: "#000" }}>
//                     <img src={item.images?.[0]} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//                     <Box sx={{ position: "absolute", bottom: 12, left: 12, color: "#fff", width: "85%" }}>
//                       <Typography variant="body2" sx={{ fontSize: 12, mb: 0.5, fontWeight: 500, borderBottom: "1.5px solid #fff", pb: 0.5 }}>
//                         {item.description}
//                       </Typography>
//                       <Button variant="text" sx={{ color: "#fff", fontSize: 12, textTransform: "none", borderBottom: "1.5px solid #fff", px: 0, mt: 1 }}>
//                         Shop Now
//                       </Button>
//                     </Box>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>
//           </>
//         ) : (
//           <Typography>Loading new arrivals...</Typography>
//         )}
//       </Box>

//       {/* === Icons Section === */}
//       <Grid container spacing={4} sx={{ mt: 8, textAlign: "center", justifyContent: "center" }}>
//         {[
//           { icon: <LocalShippingIcon sx={{ fontSize: 30 }} />, title: "Fast Delivery", desc: "Get your items quickly and safely" },
//           { icon: <HeadsetMicIcon sx={{ fontSize: 30 }} />, title: "24/7 Support", desc: "Always here to help you" },
//           { icon: <VerifiedUserIcon sx={{ fontSize: 30 }} />, title: "Secure Shopping", desc: "Your data is safe with us" },
//         ].map((item, idx) => (
//           <Grid item xs={12} sm={4} key={idx}>
//             <Box sx={{ backgroundColor: "#ccc", borderRadius: "50%", width: 80, height: 80, mx: "auto", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
//               <Box sx={{ backgroundColor: "#000", color: "#fff", borderRadius: "50%", width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 {item.icon}
//               </Box>
//             </Box>
//             <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
//             <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
