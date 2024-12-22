import MainSlider from "@/src/components/sliders/MainSlider";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/src/layouts/Header.module.css";
import { Autoplay, Pagination } from "swiper";

const Index = () => {
  return (
    <Layouts>
      {/* Section Started Slider */}
      <MainSlider />
      {/* Section About */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Leading with Innovation <br />
                  and Excellence
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                At King Corporation, we pride ourselves on delivering exceptional quality and service across all our ventures. With a commitment to innovation and integrity, we aim to exceed expectations and create lasting value for our clients and communities.
                </p>
              </div>
              <div
                className="kf-about-quote element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/quote_img.png" alt="image" />
                <div>
                True success is building something that matters, leaving a legacy of excellence.
                <h3>"Hossain Dulal"</h3>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div
                className="kf-about-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/king.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Services */}
      
      <section className="section kf-services section-bg">
      
        <div className="container">
        <div className="text-center"><h1>Our Shops</h1></div>
        <div className="text-center"><h4>Explore Our Exclusive Range of Specialty Shops</h4></div>
          <div className="kf-services-items row">
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link href="/kebab-akabane">
                  <div className="image kf-image-hover">
                    <img src="images/shop (1).png" alt="image" />
                  </div>
                  <div className="desc">
                    <h5 className="name">King Kebab Akabane</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link href="/kebab-jujo">
                  <div className="image kf-image-hover">
                    <img src="images/shop (2).png" alt="image" />
                  </div>
                  <div className="desc">
                    <h5 className="name">king kebab jujo(king curry)</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link href="/kebab-higashijujo">
                  <div className="image kf-image-hover">
                    <img src="images/shop (3).png" alt="image" />
                  </div>
                  <div className="desc">
                    <h5 className="name">king kebeb higashijujo</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <img src="images/shop (4).png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Coming Soon.....</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Menu */}
      
     
      {/* Section Choose */}
      <section className="section kf-choose section-bg">
        <div className="container">
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon1.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-2" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon2.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-3" data-jarallax-element={-40}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon3.png)" }}
            />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/why choose.png" alt="image" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Why Choose Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Culinary Excellence Crafted with Passion
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                We are committed to delivering an extraordinary dining experience. From the freshest ingredients to the finest craftsmanship, every dish is a testament to our dedication to quality and flavor.
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/fresh vegitables.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Fresh, Local Ingredients</h5>
                      <div className="subname">
                      We source only the finest local produce to ensure every bite bursts with authentic flavor. Our commitment to quality starts with selecting the best ingredients.
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/cheif.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Expertly Trained Chefs</h5>
                      <div className="subname">
                      Our team of skilled chefs brings creativity and passion to the table, crafting dishes that not only taste exquisite but tell a story of tradition and innovation.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.header_right}>
                  <div className={styles.halal_badge}>
                  <Link href="kebab-akabane">
                   <span>Explore More</span>
                   <i className="fas fa-chevron-right" />
                    </Link>
                   </div>
                </div>
              </div>
              
          </div>
        </div>
      </section>
      {/* Section Grid Carousel */}
      <section className="menu-carousel">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Special Menu</h2>
            <div className="divider mx-auto"></div>
            <p>Discover our delicious Japanese and fusion dishes</p>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="menu-swiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div className="menu-item">
                <div className="image">
                  <img src="/images/burger.png" alt="Burger" />
                </div>
                <div className="content">
                  <h3 className="title">Gourmet Burger</h3>
                  <p className="description">Japanese-inspired burger with special sauce</p>
                
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="menu-item">
                <div className="image">
                  <img src="/images/Gyudon .png" alt="Gyudon" />
                </div>
                <div className="content">
                  <h3 className="title">Gyudon</h3>
                  <p className="description">Traditional Japanese beef bowl</p>
                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="menu-item">
                <div className="image">
                  <img src="/images/Karaage .png" alt="Karaage" />
                </div>
                <div className="content">
                  <h3 className="title">Karaage</h3>
                  <p className="description">Japanese fried chicken</p>
               
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="menu-item">
                <div className="image">
                  <img src="/images/Katsu Sando.png" alt="Katsu Sando" />
                </div>
                <div className="content">
                  <h3 className="title">Katsu Sando</h3>
                  <p className="description">Japanese pork cutlet sandwich</p>
               
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="menu-item">
                <div className="image">
                  <img src="/images/ramen.png" alt="Ramen" />
                </div>
                <div className="content">
                  <h3 className="title">Signature Ramen</h3>
                  <p className="description">Rich and flavorful ramen bowl</p>
                
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="menu-item">
                <div className="image">
                  <img src="/images/Yakitori .png" alt="Yakitori" />
                </div>
                <div className="content">
                  <h3 className="title">Yakitori</h3>
                  <p className="description">Grilled chicken skewers</p>
                
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
      {/* Section Numbers */}
<section className="section kf-numbers">
  <div className="container">
    <div className="kf-numbers-items row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-numbers-item">
          <div className="num">Our Journey</div>
          <div className="desc">
            <h5 className="name">Since 2010</h5>
            <div className="subname">
              We’ve grown from a local startup to a leader in the food industry, serving customers worldwide.
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-numbers-item">
          <div className="num">Our Values</div>
          <div className="desc">
            <h5 className="name">Integrity & Quality</h5>
            <div className="subname">
              Integrity, Quality, and Customer Focus are the pillars of everything we do at King Corporation.
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="kf-numbers-item">
          <div className="num">Our Vision</div>
          <div className="desc">
            <h5 className="name">Future Forward</h5>
            <div className="subname">
              To revolutionize the food industry with our dedication to innovation, quality, and customer satisfaction.
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  
</section>

      
      
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/cta_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                 Visit Our Any Shops
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  You Get The Best Experience For Sure
                </h3>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Index;
