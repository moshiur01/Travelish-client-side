import React from "react";
import s1 from "./Media/slide-1.jpg";
import s2 from "./Media/slide-2.jpg";
import s3 from "./Media/slide-3.jpg";
import s4 from "./Media/slide-4.jpg";
import s5 from "./Media/slide-5.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden ">
        <div className="carousel-item active relative float-left w-full ">
          <img src={s1} className="block w-full " alt="Slide" />
        </div>
        <div className="carousel-item relative float-left w-full ">
          <img src={s2} className="block w-full " alt="Slide" />
        </div>
        <div className="carousel-item relative float-left w-full ">
          <img src={s3} className="block w-full " alt="Slide" />
        </div>
        <div className="carousel-item relative float-left w-full ">
          <img src={s4} className="block w-full " alt="Slide" />
        </div>
        <div className="carousel-item relative float-left w-full ">
          <img src={s5} className="block w-full " alt="Slide" />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-5 md:left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-5 md:right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
