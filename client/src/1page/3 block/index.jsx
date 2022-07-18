import "./home3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";
import { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

// jshint ignore:start

const Home3 = () => {
  const [images, setImages] = useState();

  return (
    <div className="home3">
      <div className="third">
        <div className="progressbar">
          <div className="topic">
            <div className="bu1">Посты</div>
            <div className="bu2">Сторисы</div>
            <div className="bu3">Highlights</div>
          </div>
          <div className="lines">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <img className="image3z1" src={require("../../imgs/loop.png")} />
        <img
          className="image3z2"
          src={require("../../imgs/loop opacity.png")}
        />
        <div className="slide">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
      <div className="line3z1"></div>
    </div>
  );
};

export default Home3;
// jshint ignore:end
