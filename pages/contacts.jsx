import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import Layouts from "@/src/layouts/Layouts";
import ContactForm from "@/src/components/ContactForm";
import Image from "next/image";

const Contacts = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url('/images/contactUs.jpg')" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Contact Us
          </h1>
        </div>
      </section>
      {/* Section Contacts Info */}
      <section className="section kf-contacts-info">
        <div className="container">
          <div className="kf-contacts-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon1.png" alt="" />*/}
                  <i className="las la-map-marked-alt" />
                </div>
                <div className="desc">
                  <h5 className="name">Main Location</h5>
                  <ul>
                    <li>
                    〒114-0001
                    東京都北区東十条 3-17-6 チャレンジビル 3F
                    </li>
                    <li>
                    3-17-6 Higashijujo, Kita-ku, Tokyo 114-0001 Japan
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon2.png" alt="" />*/}
                  <i className="las la-envelope-open-text" />
                </div>
                <div className="desc">
                  <h5 className="name">Email Address</h5>
                  <ul>
                    <li>
                    kingcorp2005@gmail.com <br />
                      www.kingcorporation.com
                    </li>
                    <li>
                      supportking@gmail.com <br />
                      www.kingcorporation.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon3.png" alt="" />*/}
                  <i className="las la-headset" />
                </div>
                <div className="desc">
                  <h5 className="name">Phone Number</h5>
                  <ul>
                    <li>
                    03-6903-0048
                   
                    </li>
                    <li>
                    +81-80-4168-9192 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Contacts Form */}
      <section className="section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <Image
          src="/assets/images/contact.JPG"
          alt="Contact Us" 
          width={600}
          height={400}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        />
      </div>
      <div className="col-lg-6">
        <div style={{ padding: '20px' }}>
          <h3 style={{ marginBottom: '20px' }}>Get In Touch</h3>
          <p>
            Have questions about our services? Want to make a reservation? 
            We're here to help you and answer any questions you might have.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      
      <ContactForm/>
      
      
    </Layouts>
  );
};
export default Contacts;
