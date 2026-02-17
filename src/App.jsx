import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

/*Components of the Navbar*/
import Navbar from "./navbar";
import ContactForm from "./contact";
import Homepage from "./home";
import ProductCard from "./card";

export default function App() {
  return(
    <Routes>
      <Route path = "/" element = {<Navbar/>}>
        <Route index element = {<Homepage/>}></Route>
        <Route path = "/product" element = {<ProductCard/>}></Route>
        <Route path = "/contact" element = {<ContactForm/>}></Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />}></Route>
      
    </Routes>
  )
}