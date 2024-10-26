import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url('/images/shop (1).png')" }} // Ensure the path is correct
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">
                  Savor the flavors of traditional sushi, crafted with the
                  finest ingredients.
                </div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  King Kebab Akabane <br />
                  Delight Shop
                </h2>
                <div className="kf-bts">
                  <Link href="menu-restaurant" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url('/images/shop (2).png')" }} // Ensure the path is correct
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">
                  Dive into the heart of Japan’s favorite comfort food with our
                  signature ramen bowls.
                </div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  king kebab
                  <br />
                  jujo(king curry)
                </h2>
                <div className="kf-bts">
                  <Link href="menu-coffee" className="kf-btn dark-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url('/images/shop (3).png')" }} // Ensure the path is correct
            />
            <div className="container">
              <div className="description align-left">
                <div className="subtitles">
                  Indulge in the rich and earthy notes of matcha, paired with
                  delicate Japanese sweets.
                </div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  king kebeb
                  <br />
                  higashijujo Café
                </h2>
                <div className="kf-bts">
                  <Link href="menu-coffee" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url('/images/shop (4).png')" }} // Ensure the path is correct
            />
            <div className="container">
              <div className="description align-left">
                <div className="subtitles">
                  Experience the robust flavors of Hokkaido’s finest meats and
                  seafood, grilled to perfection.
                </div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Comming Soon... <br />
                </h2>
                <div className="kf-bts"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
    </section>
  );
};
export default MainSlider;
