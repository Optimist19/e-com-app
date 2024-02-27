// import React from 'react'

import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";

function Product({ product }) {
  console.log(product)


  return (
    <div>
      <Link to={`/product/${product.slug.current}`}>
        <div className="product-card">
          <img
            src={product.image[0]}
            alt=""
            className="product-image"
            width={250}
            height={250}
          />
        </div>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}</p>
      </Link>
    </div>
  );
}

export default Product;
