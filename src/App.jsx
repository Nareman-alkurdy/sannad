// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home";
import ProductList from './features/products/pages/ProductList'; 
import './App.css'
import LayoutContainer from './shared/layout/layout-container'
import ProductDetails from './features/products/pages/ProductDetails';
import Cart from "./features/cart/pages/Cart";
import SignUp from "./features/auth/components/signup/SignUp";
import Login from "./features/auth/pages/Login";
import { Toaster } from "react-hot-toast";
// import RequireAuth from "./features/auth/guards/RequireAuth";
import CheckoutPage from "./features/checkout/pages/CheckoutPage";
 import ContactPage from "./features/contact/pages/ContactPages";

function App() {
  return (
       <BrowserRouter>
    <LayoutContainer>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
           <Route path="/products/:id" element={<ProductDetails />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/signup" element={<SignUp />} />
           <Route path="/login" element={<Login />} />
           <Route path="/checkout" element={<CheckoutPage />} />
           <Route path="/contact" element={<ContactPage />} />
           
           {/*  */}
            {/* <Route path="/checkout" element={
              <RequireAuth>
                <CheckoutPage/>
              </RequireAuth>
            }
            /> */}
        </Routes>
    </LayoutContainer>
    </BrowserRouter>
  );
}

export default App
