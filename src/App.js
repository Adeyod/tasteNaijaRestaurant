import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        {/* <Route path="/catering" Component={<Catering />} /> */}
        <Route exact path="/menu" Component={Menu} />
        <Route exact path="/contact" Component={Contact} />
        {/* <Route path="/order" Component={<Order />} /> */}
        {/* <Route path="/product" Component={<Product />} /> */}
        <Route exact path="/register" Component={Register} />
        <Route exact path="/login" Component={Login} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
