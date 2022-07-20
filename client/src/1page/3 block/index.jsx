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
  const titles = ["Тёмный лорд", "Синий огурец", "Зебровый пончик"];

  const [images, setImages] = useState();
  const [imagesInd, setImagesInd] = useState(0);

  const sliderlist = [
    {
      title: "posts",
      imagelist: [
        require("../../imgs/post1.jpg"),
        require("../../imgs/post2.jpg"),
        require("../../imgs/post3.jpg"),
        require("../../imgs/post6.jpg"),
        require("../../imgs/post4.jpg"),
        require("../../imgs/post5.jpg"),
      ],
    },
    {
      title: "stories",
      imagelist: [
        require("../../imgs/post3.jpg"),
        require("../../imgs/post2.jpg"),
        require("../../imgs/post3.jpg"),
        require("../../imgs/post6.jpg"),
        require("../../imgs/post4.jpg"),
        require("../../imgs/post5.jpg"),
      ],
    },
    {
      title: "highlights",
      imagelist: [
        require("../../imgs/post2.jpg"),
        require("../../imgs/post2.jpg"),
        require("../../imgs/post3.jpg"),
        require("../../imgs/post6.jpg"),
        require("../../imgs/post4.jpg"),
        require("../../imgs/post5.jpg"),
      ],
    },
  ];

  return (
    <div className="home3">
      <div className="third">
        <div className="progressbar">
          <div className="topic">
            {sliderlist.map((item, index) => (
              <div
                className="bu1"
                key={index}
                onClick={() => setImagesInd(index)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div
            className={
              imagesInd == 0 ? "lines1" : imagesInd == 1 ? "lines2" : "lines3"
            }
          >
            {sliderlist.map((item, index) => (
              <div key={index} onClick={() => setImagesInd(index)} />
            ))}
            <div className={"line1"} />
          </div>
        </div>
        <img className="image3z1" src={require("../../imgs/loop.png")} />
        <img
          className="image3z2"
          src={require("../../imgs/loop opacity.png")}
        />
        <div className="slide">
          <Swiper
            className="swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={15}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{ delay: 2000 }}
          >
            {sliderlist[imagesInd].imagelist.map((item, index) => (
              <SwiperSlide key={index}>
                <img className="slideimage" key={index} src={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="line3z1"></div>
    </div>
  );
};

export default Home3;
// jshint ignore:end
