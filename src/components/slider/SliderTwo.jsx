import React from "react";
import TextLoop from "react-text-loop";
import Social from "../Social";

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay "
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/banner/bg.png"
          })`,
        }}
      >
        <div className="frame-layout__particles"></div>
        {/* End particle animation */}
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo ">
                <h1 className="font-alt">
                  Hello,
                  <br /> I'm Chadi Ayari <br /> a{" "}
                  <TextLoop>
                    <span className="loop-text">Software</span>
                    <span className="loop-text"> Mobile</span>
                  </TextLoop>{" "}
                  Engineer
                </h1>
                <div className="btn-bar mt-4">
                  <a className="px-btn px-btn-theme btn-md" href="#about">
                    Discover more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>
        <Social />
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
