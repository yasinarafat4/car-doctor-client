import img1 from "../../../../assets/images/banner/5.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full md:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />

        {/* Banner texts-1 */}
        <div className="absolute flex items-center pl-5 md:pl-10 lg:pl-28 transform h-full gap- bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-2 md:space-y-4 w-3/4 md:w-1/3">
            <h2 className="text-2xl md:text-4xl lg:text-5xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-xs md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form.
            </p>
            <div className="lg:flex  items-center space-x-2 space-y-2">
              <button className="btn-discover mt-2 ">Discover More</button>
              <button className="btn-latest">Latest Project</button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn-slider">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        {/* Banner texts-2 */}
        <div className="absolute flex items-center pl-5 md:pl-10 lg:pl-28 transform h-full gap- bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-2 md:space-y-4 w-3/4 md:w-1/3">
            <h2 className="text-2xl md:text-4xl lg:text-5xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-xs md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form.
            </p>
            <div className="lg:flex  items-center space-x-2 space-y-2">
              <button className="btn-discover mt-2 ">Discover More</button>
              <button className="btn-latest">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn-slider">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        {/* Banner texts-3 */}
        <div className="absolute flex items-center pl-5 md:pl-10 lg:pl-28 transform h-full gap- bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-2 md:space-y-4 w-3/4 md:w-1/3">
            <h2 className="text-2xl md:text-4xl lg:text-5xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-xs md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form.
            </p>
            <div className="lg:flex  items-center space-x-2 space-y-2">
              <button className="btn-discover mt-2 ">Discover More</button>
              <button className="btn-latest">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn-slider">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        {/* Banner texts-4 */}
        <div className="absolute flex items-center pl-5 md:pl-10 lg:pl-28 transform h-full gap- bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-2 md:space-y-4 w-3/4 md:w-1/3">
            <h2 className="text-2xl md:text-4xl lg:text-5xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-xs md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form.
            </p>
            <div className="lg:flex  items-center space-x-2 space-y-2">
              <button className="btn-discover mt-2 ">Discover More</button>
              <button className="btn-latest">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn-slider">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
