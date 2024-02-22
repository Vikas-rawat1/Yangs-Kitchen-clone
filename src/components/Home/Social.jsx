import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Social() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="flex">
        <div className="flex grid-cols-1 gap-40 mt-20 ml-40">
          <h1 className="text-2xl font-serif w-10 tracking-widest">
            SOCIAL MEDIA
          </h1>
          <div>
            <p>Follow us for featured menu items and restaurant updates!</p>
            <p className="mt-4 mb-10">
              <a
                href="https://www.instagram.com/yangskitchenla/"
                className="hover:text-gray-500 hover:underline"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto h-48 m-20  max-h-full">
        {" "}
        {/* Adjust the height here */}
        <Slider {...carouselSettings}>
          <div className="mx-auto h-full">
            <img
              className="w-full h-full"
              src="images/slider1.jpeg"
              alt="Slider2"
            />
          </div>
          <div className="mx-auto h-full">
            <img
              className="w-full h-full"
              src="images/slider2.jpeg"
              alt="Slider3"
            />
          </div>
          <div className="mx-auto h-full">
            <img
              className="w-full h-full"
              src="images/slider3.jpeg"
              alt="Slider3"
            />
          </div>
          <div className="mx-auto h-full">
            <img
              className="w-full h-full"
              src="images/slider4.jpeg"
              alt="Slider3"
            />
          </div>
        </Slider>
      </div>

      <div className="mt-80 grid grid-cols-4 ml-20 w-4/5 gap-10 items-center">
        <img src="images/sbelow1.png" alt="sliderBelow1" />
        <img src="images/sbelow2.png" alt="sliderBelow2" />
        <img src="images/sbelow3.png" alt="sliderBelow3" />
        <img src="images/sbelow4.png" alt="sliderBelow4" />
      </div>
    </>
  );
}

export default Social;
