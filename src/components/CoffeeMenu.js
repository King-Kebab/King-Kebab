const CoffeeMenu = () => {
  const images = [
    "images/image (1).jpg",
    "images/image (2).jpg",
    "images/image (3).jpg",
    "images/image (4).jpg",
    "images/image (5).jpg",
    "images/image (6).jpg",
    "images/image (7).jpg",
    "images/image (8).jpg",
    "images/image (9).jpg",
  ];

  return (
    <div>
      <div className="kf-titles text-center grid-title">
        <div
          className="kf-subtitle element-anim-1 scroll-animate"
          data-animate="active"
        >
          Choose Best of
        </div>
        <h3
          className="kf-title element-anim-1 scroll-animate"
          data-animate="active"
        >
          Our Menu
        </h3>
      </div>
      <div className="grid-container">
        {images.map((src, index) => (
          <div className="grid-item" key={index}>
            <img src={src} alt={`Coffee item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMenu;
