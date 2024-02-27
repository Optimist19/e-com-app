import { Link } from "react-router-dom";

function FooterBanner({ footerBanner }) {
  console.log(footerBanner[0], "footer");
  const footBanner = footerBanner[0];

  return (
    <div className="foot-con">
      <div className="foot-con-small">
        <div className="p-h3">
          <p>{footBanner.discount}</p>
          <h3>{footBanner.largeText1}</h3>
          <h3>{footBanner.largeText2}</h3>
          <p>{footBanner.saleTime}</p>
        </div>

        <div className="img-con">
          <img src={footBanner.image}  />
        </div>
        <div className="p-link">
          <p>{footBanner.smallText}</p>
          <h3>{footBanner.midText}</h3>
          <p>{footBanner.desc}</p>
          <Link to={`/product/${footBanner.product}`}>
            <button type="button">{footBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
