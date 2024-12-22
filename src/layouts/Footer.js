import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <div className="footer-logo">
                  <Link href="/">
                    <Image
                      src="/images/logo.svg"
                      alt="King Kebab"
                      width={180}
                      height={90}
                      priority
                    />
                  </Link>
                </div>
                <p className="footer-desc">
                  Experience the authentic taste of Japanese cuisine at King Kebab. 
                  We bring you the finest flavors with our commitment to quality and tradition.
                </p>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-contact">
                <h3>Contact Info</h3>
                <div className="contact-info">
                  <div className="info-item">
                    <div className="icon-title">
                      <i className="las la-map-marker"></i>
                      <h4>Location</h4>
                    </div>
                    <div className="info-content">
                      <p>3-17-6 Higashijujo, Kita-ku</p>
                      <p>Tokyo 114-0001 Japan</p>
                      <p>〒114-0001 東京都北区東｜条3-17-6 チャレンジビル3F</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-title">
                      <i className="las la-phone"></i>
                      <h4>Call Us</h4>
                    </div>
                    <div className="info-content">
                      <p>Phone: +81-80-4168-9192</p>
                      <p>Tel: +81-3-6903-0048</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-title">
                      <i className="las la-envelope"></i>
                      <h4>Email Us</h4>
                    </div>
                    <div className="info-content">
                      <p>kingcorp2005@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-hours">
                <h3>Opening Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Sunday - Thursday</span>
                    <span className="time">08:00 AM - 09:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Friday</span>
                    <span className="time">03:00 PM - 09:00 PM</span>
                  </div>
                  <div className="hours-item closed">
                    <span className="day">Saturday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p> {new Date().getFullYear()} King Corporation. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1a1a1a;
          color: #fff;
          padding-top: 80px;
        }

        .footer-top {
          padding-bottom: 60px;
        }

        .footer-info {
          margin-bottom: 30px;
        }

        .footer-logo {
          margin-bottom: 25px;
        }

        .footer-desc {
          color: #bbb;
          line-height: 1.8;
          margin-bottom: 25px;
          font-size: 15px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-radius: 50%;
          transition: all 0.3s ease;
          font-size: 16px;
          text-decoration: none;
        }

        .social-links a:hover {
          background: #ff4e4e;
          transform: translateY(-3px);
          text-decoration: none;
        }

        .footer-contact, .footer-hours {
          margin-bottom: 30px;
        }

        .footer h3 {
          color: #fff;
          font-size: 24px;
          margin-bottom: 25px;
          font-weight: 600;
          position: relative;
          padding-bottom: 15px;
        }

        .footer h3:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background: #ff4e4e;
        }

        .info-item {
          margin-bottom: 25px;
        }

        .icon-title {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .icon-title i {
          font-size: 24px;
          color: #ff4e4e;
          margin-right: 12px;
        }

        .icon-title h4 {
          color: #fff;
          font-size: 18px;
          margin: 0;
          font-weight: 600;
        }

        .info-content {
          padding-left: 36px;
        }

        .info-content p {
          color: #bbb;
          margin: 0;
          line-height: 1.6;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .info-content p:last-child {
          margin-bottom: 0;
        }

        .hours-list {
          color: #bbb;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hours-item:last-child {
          border-bottom: none;
        }

        .hours-item.closed {
          color: #ff4e4e;
        }

        .hours-item .day {
          font-weight: 500;
        }

        .footer-bottom {
          background: #111;
          padding: 20px 0;
          text-align: center;
        }

        .copyright {
          color: #bbb;
          font-size: 14px;
        }

        @media (max-width: 991px) {
          .footer {
            padding-top: 60px;
          }

          .footer-info, .footer-contact, .footer-hours {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 767px) {
          .hours-item {
            flex-direction: column;
            gap: 5px;
          }

          .info-item {
            text-align: left;
          }

          .icon-title {
            justify-content: flex-start;
          }

          .info-content {
            padding-left: 36px;
          }

          .footer h3:after {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer h3, .footer-desc {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;