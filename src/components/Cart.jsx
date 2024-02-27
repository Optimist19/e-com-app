import { useRef } from "react";
import {
  AiOutlineLeft,
  AiOutlineShopping
} from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";

import { showCartFtn, removeItem } from "../store/productSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartRef = useRef();
  const { totalQuantities, cartItems, totalPrice } = useSelector(
    (store) => store.product
  );

  const dispatch = useDispatch();


  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => dispatch(showCartFtn(false))}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length > 0 ? (
          <div className="product-container">
            {cartItems.length > 0 &&
              cartItems.map((item) => {
                return (
                  <div className="product" key={item._id}>
                    <img
                      src={item?.image[0]}
                      className="cart-product-image"
                    />
                    <div className="item-desc">
                      <div className="flex-top">
                        <h4>{item.name}</h4>
                        <h4>${item.price}</h4>
                      </div>
                      <div className="flex bottom">
                        <div>
                          <p className="quantity-desc">
                                
                            <span>{item.quantity} Pair(s)</span>

                          </p>
                        </div>

                        <button
                          type="button"
                          className="remove-item"
                          onClick={() => dispatch(removeItem(item._id))}>
                          <CiCircleRemove />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link>
              <button
                type="button"
                onClick={() => dispatch(showCartFtn(false))}
                className="btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn">
                Pay with Stripe
              </button>
              {/* <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons style={{layout: 'vertical'}} createOrde ={createOrder} onApprove={onApprove} />
              </PayPalScriptProvider> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
