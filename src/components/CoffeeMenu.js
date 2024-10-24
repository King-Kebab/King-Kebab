import Link from "next/link";
const CoffeeMenu = () => {
  return (
    <div>
      <div className="kf-titles text-center">
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
          Our Burger Menu
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
        <div className="flex-1 md:bg-gray-200 mr-4 md:mr-6 lg:mr-8">Item 1</div>
        <div className="flex-1 md:bg-gray-200">Item 2</div>
      </div>
    </div>
  );
};

export default CoffeeMenu;
