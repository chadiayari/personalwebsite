import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "testimonial1",
      desc: `  Chadi, it was pleasure to meet you and be your mentor. You are an
      easy-going person and it was really nice to cooperate with you. You
      did a great job here and I wish you all the best in your future career.`,
      reviewerName: "Nikola Prečanica",
      link: "https://www.linkedin.com/in/nikola-prečanica-9907981b2/",
    },
    {
      imageName: "qqqqq",
      desc: `  Dqqqth yqest iq`,
      reviewerName: "qqqq q qq",
      link: "https://www.linkedinq981b2/",
    },
    {
      imageName: "testimonial2",
      desc: `  I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Sonja Tatarin Ragaji",
      link: "https://www.linkedin.com/in/sonja-tatarin-ragaji-064398162/",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div className="testmonial-box media" key={i}>
            <div className="avatar">
              <img
                src={`img/testimonial/${val.imageName}.jpeg`}
                alt="review comments"
              ></img>
            </div>
            {/* End avatar */}
            <div className="testmonial-text media-body">
              <p>{val.desc}</p>
              <div className="testmonial-info">
                <h6>
                  <a href={val.link} target="_blank">
                    {val.reviewerName}
                  </a>
                </h6>
              </div>
            </div>
            {/* End testimonial-text */}
          </div>
        ))}
      </Slider>
    </>
  );
}
