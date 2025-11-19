import React from "react";
import {Link, Outlet} from "react-router-dom"

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link className="active:scale-95" to="/product/men">
          Men
        </Link>
        <Link className="active:scale-95" to="/product/women">
          Women
        </Link>
        <Link className="active:scale-95" to="/product/kids">
          Kids
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
