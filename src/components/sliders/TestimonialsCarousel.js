import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const TestimonialsCarousel = () => {
  return (
    <section
      className="section kf-testimonials kf-testimonials-2 section-bg"
      style={{ backgroundImage: "url(/images/testimonials_bg2.jpeg)" }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Customer Feedback
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            What Our Clients Say
          </h3>
        </div>
        <div className="kf-testimonials-carousel">
          <Swiper
            {...sliderProps.kfTestimonialsCarousel}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="/images/john.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                      "The quality and freshness of the food are unmatched.
                      Every dish is prepared with such attention to detail,
                      making every visit a culinary delight!""
                    </div>
                    <h5 className="name">John Miller</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="/images/sophia.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                      "Hokkaido Grill & BBQ is our family’s favorite! The
                      variety of meats and seafood grilled to perfection keeps
                      us coming back for more."
                    </div>
                    <h5 className="name">Sophia Davis</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="/images/emma.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      "The service is top-notch, and the food never disappoints.
                      Every bite is an experience in itself!"
                    </div>
                    <h5 className="name">Emma Rodriguez</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="/images/noah.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      "I’ve tried many places, but the flavors here are on
                      another level. The unique blend of spices and grilling
                      techniques is second to none."
                    </div>
                    <h5 className="name">Noah Wilson</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="/images/olivia.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      "The chefs here are masters of their craft. Every dish is
                      beautifully presented and tastes as incredible as it
                      looks!"
                    </div>
                    <h5 className="name">Olivia Johnson</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="/images/ethan.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      "The food here is absolutely divine! From the first bite
                      to the last, it’s a burst of flavor that leaves you
                      wanting more."
                    </div>
                    <h5 className="name">Ethan Brown</h5>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsCarousel;
