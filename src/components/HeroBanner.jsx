// import React from 'react'

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";

function HeroBanner({ heroBanner }) {
//   console.log(heroBanner, "props");

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        {/* <img src={urlFor(heroBanner.image.asset._ref).url()} alt="headphones" className="hero-banner-image" />  */}
        <img
          src={
            heroBanner?.image?.asset?._ref &&
            urlFor(heroBanner.image.asset._ref).url()
          }
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link to={`/product/${heroBanner.product}`}>
            <button type="button">BUTTON TEXT</button>
          </Link>

          {/* <Link to={`/product/${heroBanner.product}`}>
				<button type="button">BUTTON TEXT</button>
				</Link> */}
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
