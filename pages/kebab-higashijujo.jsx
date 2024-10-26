
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/sliderProps";

const CoffeeMenu = dynamic(() => import("@/src/components/CoffeeMenu"), {
  ssr: false,
});

const MenuCoffee = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/3rd.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Shrimp Noodles
            <p>Spicy House</p>
          </h1>
        </div>
      </section>
      {/* Section Menu */}
      <CoffeeMenu />
      

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
        <br /><br /><br />
        <h1>Our Location</h1>
        <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
      <iframe
        title="Full Screen Map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.406871877618!2d139.7245030762341!3d35.76538062534619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601893a83d01f6b1%3A0x22705bf59399cf4b!2sKINGKEBAB%20Higashijujo!5e0!3m2!1sen!2sbd!4v1729895368366!5m2!1sen!2sbd"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
    
      </section>
    </Layouts>
  );
};

export default MenuCoffee;