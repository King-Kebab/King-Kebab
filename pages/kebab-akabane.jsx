// import Layouts from "@/src/layouts/Layouts";

// import dynamic from "next/dynamic";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { sliderProps } from "@/src/sliderProps";

// const CoffeeMenu = dynamic(() => import("@/src/components/CoffeeMenu"), {
//   ssr: false,
// });

// const MenuCoffee = () => {
//   return (
//     <Layouts>
//       {/* Section Started Inner */}
//       <section className="section kf-started-inner">
//         <div
//           className="kf-parallax-bg js-parallax"
//           style={{ backgroundImage: "url(images/hero-bg-2.png)" }}
//         />
//         <div className="container">
//           <h1
//             className="kf-h-title text-anim-1 scroll-animate"
//             data-splitting="chars"
//             data-animate="active"
//           >
//             Bangla Curry &
//             <p>Biriyani House</p>
//           </h1>
//         </div>
//       </section>
//       {/* Section Menu */}
//       {/* <CoffeeMenu /> */}
//       <div className="grid grid-cols-3 xl:grid-cols-5 gap-4 px-4 py-4">
//       <div className="w-full h-24 bg-purple-700 rounded-xl">
//             <a href="/images/burger.png" className="has-popup-image">
//               <img
//                 src="/images/burger.png"
//                 height={"100"}
//                 width={"100"}
//                 alt="image"
//               />
//             </a>
//           </div>
//           <div className="w-full h-24 bg-purple-700 rounded-xl">
//             <a href="/images/burger.png" className="has-popup-image">
//               <img
//                 src="/images/burger.png"
//                 height={"100"}
//                 width={"100"}
//                 alt="image"
//               />
//             </a>
//           </div>
//       </div>
         
//       <section className="section kf-grid-carousel">
//         <div className="container">
//           <Swiper {...sliderProps.kfGridCarousel} className="swiper-container">
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/burger.png" className="has-popup-image">
//                     <img src="/images/burger.png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Burger</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/cheasecake.png" className="has-popup-image">
//                     <img src="/images/cheasecake.png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Chease Cake</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/Gyudon .png" className="has-popup-image">
//                     <img src="/images/Gyudon .png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Gyudon</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/Karaage .png" className="has-popup-image">
//                     <img src="/images/Karaage .png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Karaage</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/Katsu Sando.png" className="has-popup-image">
//                     <img src="/images/Katsu Sando.png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Katsu Sando</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/noodles.png" className="has-popup-image">
//                     <img src="/images/noodles.png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Noodles</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/Okonomiyaki .png" className="has-popup-image">
//                     <img src="/images/Okonomiyaki .png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Okonomiyaki</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/ramen.png" className="has-popup-image">
//                     <img src="/images/ramen.png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Ramen</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/tonkastu.png" className="has-popup-image">
//                     <img src="/images/tonkastu.png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Tonkastu</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="swiper-slide">
//               <div
//                 className="slide-item element-anim-1 scroll-animate"
//                 data-animate="active"
//               >
//                 <div className="image kf-image-hover">
//                   <a href="/images/Yakitori .png" className="has-popup-image">
//                     <img src="/images/Yakitori .png" alt="image" />
//                   </a>
//                 </div>
//                 <div className="desc">
//                   <h5 className="name">Yakitori</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </section>
//     </Layouts>
//   );
// };
// export default MenuCoffee;
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
          style={{ backgroundImage: "url(images/hero-bg-2.png)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Bangla Curry &
            <p>Biriyani House</p>
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
      </section>
    </Layouts>
  );
};

export default MenuCoffee;