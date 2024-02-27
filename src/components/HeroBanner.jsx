// import React from 'react'

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import { urlFor } from "../lib/client";

function HeroBanner({ heroBanner }) {
  console.log(heroBanner, "props");
  console.log(heroBanner.result, "props");

  return (
    <div className="hero-con">
      {heroBanner?.result.map((detail) => {
        return (
          <div key={detail._id} className="detail-con">
            <div>
              <p className="beats-solo">{detail.smallText}</p>
              <h3>{detail.midText}</h3>
              <h1>{detail.largeText1}</h1>
            </div>

            <div className="img-con">
              <img
                src={detail.image}
                alt="headphones"
              />
            </div>

            <div className="link-div">
              <div>
                
              <Link to={`/product/${detail.product}`}>
                <button type="button">BUY</button>
              </Link>
              </div>
              <div className="desc">
                <h5>Description</h5>
                <p>{detail.desc}</p>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default HeroBanner;
