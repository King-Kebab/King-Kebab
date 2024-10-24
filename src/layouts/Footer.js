import Image from "next/image";

const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}

            <a href="/">
              <Image
                src="/images/logo.svg" // Path to your image
                alt="Company Logo"
                width={400} // Desired width
                height={200} // Desired height
                priority // This ensures the image loads quickly
              />
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Working Hours</h5>
              <ul>
                <li>
                  Sunday - Thursday
                  <em>08:00 am - 09:00pm</em>
                </li>
                <li>
                  Only Friday
                  <em>03:00 pm - 09:00pm</em>
                </li>
                <li>
                  <strong>Saturday Close</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Location :</em>3 Chome 18-28, Higashijujo,Japan
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email Address :</em>
                  king_corporation@gmail.com
                </li>
                <li>
                  <i className="las la-phone" />
                  <em>Phone Number :</em>
                  +818041689192
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Gallery</h5>
              <ul>
                <li>
                  <a
                    href="/images/Yakitori .png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/Yakitori .png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/tonkastu.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/tonkastu.png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/ramen.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/ramen.png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/Okonomiyaki .png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/Okonomiyaki .png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/noodles.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/noodles.png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="/images/Katsu Sando.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="/images/Katsu Sando.png" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2024 King Corporation. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
