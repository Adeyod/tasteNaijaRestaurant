import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-primary items-center text-white italic flex justify-between h-[65px] p-3 ">
      <Link to="/">
        <div className="flex items-center">
          <img
            src="../../images/cyanWhiteMixNoBg.png"
            alt="logo"
            className="w-[70px]"
          />
        </div>
      </Link>
      <div className="hidden md:flex gap-3 md:mr-10 lg:mr-20">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/menu">Menu</Link>
        {/* <Link to="/product">Product</Link> */}
        {/* <Link to="/catering">Catering</Link> */}
        {/* <Link to="/order">Order</Link> */}
        <Link to="contact">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <button className="flex md:hidden" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <AiOutlineClose className="h-10 w-10" />
        ) : (
          <BiMenuAltRight className="h-10 w-10" />
        )}
      </button>
      <div
        className={`${
          toggle
            ? 'flex flex-col md:hidden absolute bg-primary top-[65px] right-0 py-8 px-20 gap-4 Navbar'
            : 'hidden'
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/menu">Menu</Link>
        {/* <Link to="/product">Product</Link> */}
        {/* <Link to="/catering">Catering</Link> */}
        {/* <Link to="/order">Order</Link> */}
        <Link to="contact">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
