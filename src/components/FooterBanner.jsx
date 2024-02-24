// import React from 'react'

import { urlFor } from "../lib/client"

function FooterBanner({footerBanner}) {
    // console.log(footerBanner, "props");


  return (
	<div className="footer-banner-container">
    <div className="banner-desc">
      <div className="left">
        <p>{footerBanner.discount}</p>
        <p>{footerBanner.discount}</p>
        <h3>{footerBanner.largeText1}</h3>
        <h3>{footerBanner.largeText2}</h3>
        <p>{footerBanner.saleTime}</p>

      </div>
      <div className="right">
        <p>{footerBanner.smallText}</p>
        <h3>{footerBanner.midText}</h3>
        <p>{footerBanner.desc}</p>
        <a href={`/product/${footerBanner.product}`}>
          <button type="button">{footerBanner.buttonText}</button>
        </a>
      </div>

      <img src={
            footerBanner?.image?.asset?._ref &&
            urlFor(footerBanner.image.asset._ref).url()
          } className="footer-banner-image" />
    </div>
  </div>
  )
}

export default FooterBanner