// import React from 'react'

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";

function HeroBanner({ heroBanner }) {
  console.log(heroBanner, "props");
  console.log(heroBanner.result, "props");

  return (
    <div className="hero-banner-container">
      {heroBanner?.result.map((detail) => {
        return (
          <div key={detail._id}>
          <p className="beats-solo">{detail.smallText}</p>
          <h3>{detail.midText}</h3>
          <h1>{detail.largeText1}</h1>
          {/* <img src={urlFor(heroBanner.image.asset._ref).url()} alt="headphones" className="hero-banner-image" />  */}
          <img
            src={
              detail?.image?.asset?._ref &&
              urlFor(detail.image.asset._ref).url()
            }
            alt="headphones"
            className="hero-banner-image"
          />

          <div>
            <Link to={`/product/${detail.product}`}>
              <button type="button">BUTTON TEXT</button>
            </Link>

            {/* <Link to={`/product/${heroBanner.product}`}>
				<button type="button">BUTTON TEXT</button>
				</Link> */}
            <div className="desc">
              <h5>Description</h5>
              <p>{detail.desc}</p>
            </div>
          </div>
          {/* <h1>hgvhgvgjh</h1> */}
        </div>);
      })}
    </div>
  );
}

export default HeroBanner;
