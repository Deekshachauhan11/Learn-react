import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-4 px-14 bg-cyan-900 justify-between items-center">
      <h2 className="font-bold text-2xl">Sheryains</h2>
      <div className="flex gap-16">
        <Link className="active:scale-95" to="/">
          Home
        </Link>
        <Link className="active:scale-95" to="/about">
          About
        </Link>
        <Link className="active:scale-95" to="/product">
          Product
        </Link>
        <Link className="active:scale-95" to="/contact">
          Contact
        </Link>
        <Link className="active:scale-95" to="/courses">
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
