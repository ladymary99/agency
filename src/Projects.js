import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Projects.css";

const images = [
  { src: "./myimgs/project1.jpg", text: "Crew-1 Mission", link: "#" },
  { src: "./myimgs/project2.jpg", text: "Perseverance", link: "#" },
  { src: "./myimgs/project3.jpg", text: "Voyager Station", link: "#" },
  { src: "./myimgs/project4.jpg", text: "VERITAS & DAVINCI+", link: "#" },
  { src: "./myimgs/project5.jpg", text: "NEO Surveyor", link: "#" },
  {
    src: "./myimgs/project6.jpg",
    text: "International Lunar Research Station",
    link: "#",
  },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 500);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative slider-bg">
      <div className="parageraph">
        <h1 className="text-5xl font-bold absolute projecth ">PROJECTS</h1>
        <div className="text-lg text-gray spanh">
          <span>
            <img src="./myimgs/fram.png" alt="logo" className="logosamll"></img>
            Nous accompagnons les marques dans leur stratégie d’influence, et
            représentons en exclusivité une trentaine de talents uniques en leur
            genre.
          </span>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={5}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative z-0"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="relative text-center">
            <img
              src={item.src}
              alt={`Project ${index + 1}`}
              className={`w-auto max-w-[300px] h-auto object-cover transition-transform duration-500
                          filter grayscale hover:grayscale-0 hover:-translate-y-2 ${
                            activeIndex === index ? "grayscale-0" : "grayscale"
                          }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`text-container ${fade ? "" : "show"}`}>
        <h2 className="font-bold">{images[activeIndex].text}</h2>
        <div className="justify-center buttons">
          <button className="transition">North America</button>
          <button className="transition ">Space</button>
          <button className="transition ">Asia</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
