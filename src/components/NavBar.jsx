// import React from 'react'
import { showCartFtn } from "../store/productSlice";
import { Link } from "react-router-dom";

import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";


function NavBar() {
  const { totalQuantities, showCart } = useSelector((store) => store.product);

  const dispatch = useDispatch()



  return (
    <div className="navbar-container">
      <p>
        <Link to="/">Gadgets</Link>
      </p>

      <button type="button" className="cart-icon" onClick={()=>dispatch(showCartFtn(true))}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
}

export default NavBar;
