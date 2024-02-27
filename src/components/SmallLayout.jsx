import { useState } from "react";
import HeroBanner from "./HeroBanner";
import FooterBanner from "./FooterBanner";
import Product from "./Product";
import { sanityData } from "../data";

function SmallLayout() {
  const [arr, setArr] = useState(sanityData)
  // const [data, setData] = useState({
  //   products: "",
  //   bannerData: ""
  // });

  console.log(arr);


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
        footerBanner={arr[1].result}
      />
    </div>
  );
}

export default SmallLayout;
