import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
// import Order from './pages/Order';
// import Catering from './pages/Catering';
import Menu from './pages/Menu';
import Footer from './components/Footer';
// import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
// import { motion } from 'framer-motion';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/catering" element={<Catering />} /> */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/order" element={<Order />} /> */}
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
