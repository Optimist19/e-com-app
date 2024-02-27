function FooterBanner({ footerBanner }) {
  console.log(footerBanner[0], "footer");
  const footBanner = footerBanner[0];

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footBanner.discount}</p>
          <h3>{footBanner.largeText1}</h3>
          <h3>{footBanner.largeText2}</h3>
          <p>{footBanner.saleTime}</p>
        </div>
        <div className="right">
          <p>{footBanner.smallText}</p>
          <h3>{footBanner.midText}</h3>
          <p>{footBanner.desc}</p>
          <a href={`/product/${footBanner.product}`}>
            <button type="button">{footBanner.buttonText}</button>
          </a>
        </div>

        <div className="head">
          <img src={footBanner.image} className="footer-banner-image head" />
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
