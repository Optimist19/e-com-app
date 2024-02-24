// import { SanityClient } from "sanity";
import { createClient } from "@sanity/client";
// import { ImageUrlBuilder } from "sanity";
import imageUrlBuilder from "@sanity/image-url";



export const client = createClient({
  projectId: "o4vudod7",
  dataset: "production",
  apiVersion: "2024-06-02",
  // token: ""
  ignoreBrowserTokenWarning: true,
  useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



export async function getOnlyProduct() {
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

    return productData;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error
  }
}

// NB. The line 7 is able to do what getOnlyProduct() should, because we want to get something from the backend ,but it didn't work, so i found another means to achieve the purpose of the line 7 in the getOnlyProduct(). The line 7is compeletely not useless though, it also used for line 18, to be able to display pictures.

// For me to have reduced my code, the fetchData() in SmallLayout component is what i should have used here, which will be fetching from the backend for me(product and banner) and not use the line 35, which is only fetching the "product" for me.
