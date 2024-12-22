
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/sliderProps";
import { Autoplay, Pagination } from "swiper";

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
          style={{ backgroundImage: "url(images/2nd.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Sushi Platter
            <p>Delicious House</p>
          </h1>
        </div>
      </section>
      {/* Section Menu */}
      <CoffeeMenu />
      

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
        <br /><br /><br />
        <h1>Our Location</h1>
        <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
      <iframe
        title="Full Screen Map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.6390462267464!2d139.71651128805198!3d35.75967565492616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189347b02453e5%3A0x6a7aead869870875!2sKING%20CURRY%20Jujo%20(KING%20KEBEB)!5e0!3m2!1sen!2sbd!4v1729895495976!5m2!1sen!2sbd"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
    
      
    </Layouts>
  );
};

export default MenuCoffee;