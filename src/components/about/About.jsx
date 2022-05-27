import React from "react";
import pdf from "../../Chadi_Resume.pdf";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box dark-img-box">
            <img
              src={process.env.PUBLIC_URL + "/img/about/about.png"}
              alt="About Chadi"
            />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box about-me">
            <h5>Chadi Ayari</h5>
            <h3>
              Full Stack <span className="color-theme">Software Engineer</span>
            </h3>
            <p>I develop and maintain services, mobile apps, and web apps.</p>
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
                  <p>+21653180256</p>
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
