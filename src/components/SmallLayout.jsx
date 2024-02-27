import { useEffect, useState } from "react";
import HeroBanner from "./HeroBanner";
import FooterBanner from "./FooterBanner";
import Product from "./Product";
import { sanityData } from "../data";

function SmallLayout() {
  const [arr, setArr] = useState(sanityData)
  const [data, setData] = useState({
    products: "",
    bannerData: ""
  });

  // console.log(newArray);


  return (
    <div>
      <HeroBanner
        heroBanner={arr[1]}
      />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {
          arr[0].result.map((product) => {
            return <Product key={product?.result?._id} product={product} />;
          })}
      </div>
      <FooterBanner
        footerBanner={
          data &&
          data.bannerData &&
          data.bannerData.result &&
          data.bannerData.result[0]
        }
      />
    </div>
  );
}

export default SmallLayout;
