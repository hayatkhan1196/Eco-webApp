import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import "./slider.scss";
const Slider = () => {
  const [cureentSlide, setCrrentSlide] = useState(0);
  const sliderLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCrrentSlide(cureentSlide == sliderLength - 1 ? 0 : cureentSlide + 1);
  };
  const prevSlide = () => {
    setCrrentSlide(cureentSlide == 0 ? sliderLength - 1 : cureentSlide - 1);
  };
  useEffect(() => {
    setCrrentSlide(0);
  }, []);
  //   function auto() {
  //     slideInterval = setInterval(nextSlide, intervalTime);
  //   }

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [cureentSlide, slideInterval, autoScroll]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === cureentSlide ? "current slide" : "slide"}>
            {index === cureentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a href="#product" className="--btn --btn-primary">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
