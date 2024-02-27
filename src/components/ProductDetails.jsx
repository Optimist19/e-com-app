import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decQty, incQty, onAdd } from "../store/productSlice";

import { sanityData } from "../data";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar
} from "react-icons/ai";


import Product from "./Product";
import { useState } from "react";

function ProductDetails() {
  const state = useSelector(store => store.product)
  console.log(state, "state")
  const {qty} = useSelector(store => store.product)
  const dispatch =  useDispatch()

  const [index, setIndex] = useState(0)
  const [data, setData] = useState(sanityData[0])
  const params = useParams();

  const { productId } = params;
  console.log(productId,"productId")


  console.log(data?.result, "data");

  const details = data?.result.find(
    (current) => current.slug.current === productId
  );
  console.log(details, "good");

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
          <img
              src={details.image[index]} className="product-detail-image"
            />
          </div>

          <div className="small-images-container">
          {details.image?.map((item, i)=>(
              <img src={item} key={i} className={i === index ? "small-image selected-image" : "small-image"} onMouseEnter={()=> setIndex(i)} />
            ))}
          </div>

          <div className="product-detail-desc">
            <h1>{details.name}</h1>
            <div className="reviews">
              <div>
                {/* <AiOutlineMinus />
                <AiOutlinePlus /> */}
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
            <h4>Details: </h4>
            <p>{details.details}</p>
            <p className="price">${details.price}</p>
            <div className="quantity">
              <h3>Quantity: </h3>
              <p className="quantity-desc">
                <span className="minus" onClick={()=>dispatch(decQty())}>
                  <AiOutlineMinus />
                </span>
                <span className="num">
                  {qty}
                </span>
                <span className="plus" onClick={()=>dispatch(incQty())}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
          </div>

          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={()=>dispatch(onAdd({details, quantity: qty}))}>
              Add to Cart
            </button>

          </div>
        </div>
      </div>
      
      <div className="maylike-producrs-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
          {data.result.map((item) =>(
                  <Product key={item._id} product={item}/>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
