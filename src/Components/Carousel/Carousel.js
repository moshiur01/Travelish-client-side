import React from "react";
import s1 from "./Media/s1.jpg";
import s2 from "./Media/s2.jpg";
import s3 from "./Media/s3.jpg";
import s4 from "./Media/s4.jpg";
import s5 from "./Media/s5.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden py-8 px-4">
        <div className="carousel-item active relative float-left w-full px-4">
          <img src={s1} className="block w-full rounded-lg" alt="Slide" />
        </div>
        <div className="carousel-item relative float-left w-full px-4">
          <img src={s2} className="block w-full rounded-lg" alt="Slide" />
        </div>
        <div className="carousel-item relative float-left w-full px-4">
          <img src={s3} className="block w-full rounded-lg" alt="Slide" />
        </div>
        <div className="carousel-item relative float-left w-full px-4">
          <img src={s4} className="block w-full rounded-lg" alt="Slide" />
        </div>
        <div className="carousel-item relative float-left w-full px-4">
          <img src={s5} className="block w-full rounded-lg" alt="Slide" />
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
