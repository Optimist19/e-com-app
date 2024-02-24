import { useEffect, useState } from "react";
import HeroBanner from "./HeroBanner";
import FooterBanner from "./FooterBanner";
import Product from "./Product";

function SmallLayout() {
  const [data, setData] = useState({
    products: "",
    bannerData: ""
  });

  // console.log(data);

  async function fetchData() {
    try {
      const params = new URLSearchParams({
        query: '*[_type == "product"]'
      });

      // Fetch products data
      let productResponse = await fetch(
        `https://o4vudod7.api.sanity.io/v2024-06-02/data/query/production?${params}`
      );
      if (!productResponse.ok) {
        throw new Error("Failed to fetch product data");
      }
      let productData = await productResponse.json();
      setData((prevState) => ({ ...prevState, products: productData }));

      // Construct URLSearchParams object for banner query
      const bannerParams = new URLSearchParams({
        query: '*[_type == "banner"]'
      });

      // Fetch banner data
      let bannerResponse = await fetch(
        `https://o4vudod7.api.sanity.io/v2024-06-02/data/query/production?${bannerParams}`
      );
      if (!bannerResponse.ok) {
        throw new Error("Failed to fetch banner data");
      }
      let bannerData = await bannerResponse.json();
      setData((prevState) => ({ ...prevState, bannerData: bannerData }));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    }
  }

  // console.log(data && data.bannerData && data.bannerData.result && data.bannerData.result[0]);

  useEffect(() => {
    fetchData();
    // getServerSideProps()
  }, []);

  // console.log(data.bannerData[0])

  return (
    <div>
      <HeroBanner
        heroBanner={
          data &&
          data.bannerData &&
          data.bannerData.result &&
          data.bannerData.result[0]
        }
      />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {data &&
          data.products &&
          data.products.result.map((product) => {
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
