import MainSlider from "@/src/components/sliders/MainSlider";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";


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
                <div className="image kf-image-hover">
                  <Link href="menu-restaurant">
                    <img src="images/shop (1).png" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  
                  <h5 className="name">Tokyo Sushi Delight</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="menu-coffee">
                    <img src="images/shop (2).png" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                 
                  <h5 className="name">Osaka Ramen House</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="services">
                    <img src="images/shop (3).png" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                 
                  <h5 className="name">Kyoto Matcha Café</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="services">
                    <img src="images/shop (4).png" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                 
                  <h5 className="name">Hokkaido Grill & BBQ</h5>
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
              <Link
                href="about"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Grid Carousel */}
      <section className="section kf-grid-carousel">
        <div className="container">
          <Swiper {...sliderProps.kfGridCarousel} className="swiper-container">
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/burger.png" className="has-popup-image">
                    <img src="/images/burger.png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Burger</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/cheasecake.png" className="has-popup-image">
                    <img src="/images/cheasecake.png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Chease Cake</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/Gyudon .png" className="has-popup-image">
                    <img src="/images/Gyudon .png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Gyudon</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/Karaage .png" className="has-popup-image">
                    <img src="/images/Karaage .png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Karaage</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/Katsu Sando.png" className="has-popup-image">
                    <img src="/images/Katsu Sando.png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Katsu Sando</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/noodles.png" className="has-popup-image">
                    <img src="/images/noodles.png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Noodles</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/Okonomiyaki .png" className="has-popup-image">
                    <img src="/images/Okonomiyaki .png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Okonomiyaki</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/ramen.png" className="has-popup-image">
                    <img src="/images/ramen.png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Ramen</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/tonkastu.png" className="has-popup-image">
                    <img src="/images/tonkastu.png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Tonkastu</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="/images/Yakitori .png" className="has-popup-image">
                    <img src="/images/Yakitori .png" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Yakitori</h5>
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
