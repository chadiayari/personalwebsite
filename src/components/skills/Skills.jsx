import React from "react";
import Collapsible from "react-collapsible";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Work Experience</h4>
          </div>

          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">01/2022-Present</span>
              <h6>
                Mobile Engineer <i>(half time, remote)</i>
              </h6>
              <p>Towards Zero Waste, Sweden</p>
              <div className="collapsible">
                <Collapsible trigger="Read more">
                  <p className="collapsible-content">
                    Developing a mobile and web app using Flutter, Restful APIs
                    using Django. <br />
                    Working in Agile method.
                  </p>
                </Collapsible>
              </div>
            </li>
            <li>
              <span className="theme-bg">02/2022-Present</span>
              <h6>
                Mobile Engineer <i>(full time, physical presence)</i>
              </h6>
              <p>Pillai College, India</p>
              <div className="collapsible">
                <Collapsible trigger="Read more">
                  <p className="collapsible-content">
                    Developing a mobile app using Flutter, Restful APIs using
                    Flask, and a MongoDB database.
                  </p>
                </Collapsible>
              </div>
            </li>
            <li>
              <span className="theme-bg">06/2021-09/2021</span>
              <h6>SFCC Software Engineer</h6>
              <p>Bee IT, Serbia</p>
              <div className="collapsible">
                <Collapsible trigger="Read more">
                  <p className="collapsible-content">
                    Worked as backend software engineer, developing an ecommerce
                    web app. <br />
                    Used JavaScript as a language, and SFCC as a CMS.
                  </p>
                </Collapsible>
              </div>
            </li>
            <li>
              <span className="theme-bg">07/2020-09/2020</span>
              <h6>Frontend Web Developer</h6>
              <p>ElBoita, Tunisia</p>
              <div className="collapsible">
                <Collapsible trigger="Read more">
                  <p className="collapsible-content">
                    Worked on ecommerce website, using Wordpress. <br />
                    Designed pages, created newsletter email form, and user
                    signup and login.
                  </p>
                </Collapsible>
              </div>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>
          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2017-2022</span>
              <h6>Software Engineering degree</h6>
              <p>
                <a
                  className="university-link"
                  href="http://www.issatso.rnu.tn/fo/index.php"
                >
                  ISSAT Sousse, Tunisia
                </a>
              </p>
            </li>
            <li>
              <span className="dark-bg">2013-2017</span>
              <h6>Mathematics High School Degree</h6>
              <p>LMMN Nabel, Tunisia</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 ml-auto my-3">
          <div className="sm-title">
            <h4 className="font-alt">Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>Flutter</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 95 + "%" }}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>ReactJS</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 85 + "%" }}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>NodeJS</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 85 + "%" }}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>MongoDB</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 90 + "%" }}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Cloud Services</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 80 + "%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
            <div className="skill-lt">
              <h6>DevOps</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 85 + "%" }}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
            <div className="skill-lt">
              <h6>Public Speaking</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 95 + "%" }}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
