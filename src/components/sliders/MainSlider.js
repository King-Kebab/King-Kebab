import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/src/layouts/Header.module.css";
const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url('/images/akabane.jpg')" }} // Ensure the path is correct
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">
                  aste the Art of Grilling: Where Each Kebab is a Perfectly
                  Spiced Masterpiece!
                </div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  King Kebab Akabane <br />
                  Delight Shop
                </h2>
                
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
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url('/images/jujo.jpg')" }} // Ensure the path is correct
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">
                  Get Wrapped in the Rich Flavors of Tradition – Our Kebabs are
                  Marinated to Delight!
                </div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  king kebab
                  <br />
                  jujo(king curry)
                </h2>
                <div className={styles.header_right}>
                  <div className={styles.halal_badge}>
                  <Link href="kebab-jujo">
                   <span>Explore More</span>
                   <i className="fas fa-chevron-right" />
                    </Link>
                   </div>
                   </div>
                
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{
                backgroundImage: "url('/images/his.jpg')",
                backgroundSize: "contain", // Set to contain, or use percentage to control zoom
                backgroundPosition: "center", // Center the image to keep it aligned
                backgroundRepeat: "no-repeat", // Prevents image tiling
              }}
            />
            <div className="container">
              <div className="description align-left">
                <div className="subtitles">
                  Elevate Your Taste Adventure: Fire-Grilled Kebabs Bursting
                  with Flavor in Every Bite!
                </div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  king kebeb
                  <br />
                  higashijujo Café
                </h2>
                
                <div className={styles.header_right}>
                  <div className={styles.halal_badge}>
                  <Link href="kebab-higashijujo">
                   <span>Explore More</span>
                   <i className="fas fa-chevron-right" />
                    </Link>
                   </div>
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
                  Where Passion for Grilling Meets the Perfect Spice Blend –
                  Taste Our Kebabs Today!
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
