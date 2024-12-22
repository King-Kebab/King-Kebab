import { useState } from 'react';

const CoffeeMenu = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: ''
  });

  const menuItems = [
    {
      image: "images/image (1).jpg",
      title: "Biriyani",
      category: "Main Course"
    },
    {
      image: "images/image (2).jpg",
      title: "Curry",
      category: "Main Course"
    },
    {
      image: "images/image (3).jpg",
      title: "Special Dish",
      category: "Specialty"
    },
    {
      image: "images/image (4).jpg",
      title: "Kebab",
      category: "Appetizer"
    },
    {
      image: "images/image (5).jpg",
      title: "Rice Bowl",
      category: "Main Course"
    },
    {
      image: "images/image (6).jpg",
      title: "Noodles",
      category: "Main Course"
    },
    {
      image: "images/image (7).jpg",
      title: "Soup",
      category: "Appetizer"
    },
    {
      image: "images/image (8).jpg",
      title: "Side Dish",
      category: "Sides"
    },
    {
      image: "images/image (9).jpg",
      title: "Dessert",
      category: "Desserts"
    }
  ];

  const openLightbox = (image) => {
    setLightbox({
      isOpen: true,
      currentImage: image
    });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      currentImage: ''
    });
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="menu-section">
      <div className="container">
        <div className="kf-titles text-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Discover Our
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Special Menu
          </h3>
        </div>
        
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div 
              className="menu-item element-anim-1 scroll-animate" 
              data-animate="active"
              key={index}
            >
              <div className="menu-item-inner">
                <div 
                  className="menu-item-image"
                  onClick={() => openLightbox(item.image)}
                  role="button"
                  tabIndex={0}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="menu-item-overlay">
                    <span className="category">{item.category}</span>
                  </div>
                </div>
                <div className="menu-item-info">
                  <h4 className="title">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.currentImage} alt="Full size" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CoffeeMenu;
