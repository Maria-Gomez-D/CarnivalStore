import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";
import NewProducts from "./components/products/newProducts";
import Subscribe from "./components/subscribe/subscribe";
import MadeToOrder from "./components/pages/madeToOrder";
import AboutUs from "./components/pages/aboutUs";
import Contact from "./components/pages/contact";
import Collections from "./components/pages/collections";
import CakeToppers from "./components/pages/cakeToppers";
import Banners from "./components/pages/banners";
import Letters from "./components/pages/letters";
import Favors from "./components/pages/favor";
import Car from "./components/pages/car";
import Account from "./components/pages/account";  
import SignUp from "./components/pages/signUp";
import Welcome from "./components/pages/welcome";

function App() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <Router>
            <Navbar cart={cart} />
            <ConditionalComponents />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/madeToOrder" element={<MadeToOrder />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/collections" element={<Collections onAddToCart={handleAddToCart} />} />
                <Route path="/cakeToppers" element={<CakeToppers onAddToCart={handleAddToCart} />} />
                <Route path="/banners" element={<Banners onAddToCart={handleAddToCart} />} />
                <Route path="/letters" element={<Letters onAddToCart={handleAddToCart} />} />
                <Route path="/favors" element={<Favors onAddToCart={handleAddToCart} />} />
                <Route path="/car" element={<Car cart={cart} setCart={setCart} />} />
                <Route path="/account" element={<Account />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
            <Footer />
        </Router>
    );
}

function Home() {
    return (
        <>
            <Banner />
            <NewProducts />
            <Subscribe />
        </>
    );
}

function ConditionalComponents() {
    const location = useLocation();

    if (location.pathname === '/') {
        return null; 
    }

    return null;
}

export default App;
