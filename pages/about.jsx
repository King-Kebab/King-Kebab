import VideoPlayer from "@/src/components/VideoPlayer";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const About = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url('/images/cheif.png')" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            About Us
          </h1>
        </div>
      </section>
      {/* Section About-2 */}
      <section className="section kf-choose kf-choose-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About King Corporation
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
                href="menu-coffee"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>our shop</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="/images/aboutUs.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Numbers-2 */}
      <section className="section kf-numbers-2 section-bg">
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
      {/* Section Video */}
      <section className="section kf-video">
        <div className="container">
          <VideoPlayer
            videoBg={"images/videoBg.png"}
            extraClass={"kf-image-hover"}
          />
        </div>
      </section>
      
      {/* Section Team */}
      <section className="section kf-team section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Experience Team Member
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Meet Our Professional Chefs
            </h3>
          </div>
          <div className="kf-team-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Anthony J. Bowman</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/chef (1).png" alt="image" />
                  
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Kenny V. Gonzalez</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/chef (2).png" alt="image" />
                  
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Joseph M. Lawrence</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/chef (3).png" alt="image" />
                  
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Charles K. Smith</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/chef (4).png" alt="image" />
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
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
export default About;
