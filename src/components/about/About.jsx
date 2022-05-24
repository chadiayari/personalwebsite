import React from "react";
import pdf from "../../Chadi_Resume.pdf";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box dark-img-box">
            <img src="img/about/about.png" alt="About Chadi" />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box about-me">
            <h3>Chadi Ayari</h3>
            <h5>
              A freshly graduated{" "}
              <span className="color-theme">Software Engineer</span>
            </h5>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Age</label>
                  <p>23 Yr</p>
                </div>
                <div className="media">
                  <label>Origin</label>
                  <p>Nabel, Tunisia</p>
                </div>
                <div className="media">
                  <label>Current address</label>
                  <p>Navi Mumbai, India</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>chadiayari@outlook.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>+216 53 180 256</p>
                </div>

                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a
                className="px-btn px-btn-theme"
                href={pdf}
                target="_blank"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
