import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const tabList = ["All", "Web Dev", "Mobile Dev", "AI"];
const AllPortfolioContent = [
  {
    img: "1",
    title: "Buying Shares Mobile App",
    subTitle: "Flutter - NodeJS - MongoDB",
    alterText: "Motion Graphy",
    portfolioLink: "",
  },
  {
    img: "3",
    title: "Driving School Website",
    subTitle: "Wordpress",
    alterText: "Elearning App",
    portfolioLink: "https://abcdriving.ch",
  },
  {
    img: "2",
    title: "College Mobile App",
    subTitle: "Flutter - Flask - MongoDB",
    alterText: "Business Mockup",
    portfolioLink: "",
  },
  {
    img: "5",
    title: "Event Hub: create events online",
    subTitle: "ReactJS - NodeJS - MongoDB",
    alterText: "Event Hub: create events online",
    portfolioLink: "https://github.com/chadiayari/EventHub",
  },
  {
    img: "4",
    title: "Chat Application",
    subTitle: "Flutter - Firebase",
    alterText: "Chat Application",
    portfolioLink: "https://github.com/chadiayari/Chat-App-Flutter-Firebase",
  },
  {
    img: "6",
    title: "Image Classifier",
    subTitle: "Python: TenserFlow - Cifar10",
    alterText: "Image Classifier",
    portfolioLink: "https://github.com/chadiayari/imageClassification",
  },
];
const WebPortfolioContent = [
  {
    img: "3",
    title: "Driving School Website",
    subTitle: "Wordpress",
    alterText: "Elearning App",
    portfolioLink: "https://abcdriving.ch",
  },
  {
    img: "5",
    title: "Event Hub: create events online",
    subTitle: "ReactJS - NodeJS - MongoDB",
    alterText: "Event Hub: create events online",
    portfolioLink: "https://github.com/chadiayari/EventHub",
  },
];

const MobilePortfolioContent = [
  {
    img: "1",
    title: "Buying Shares Mobile App",
    subTitle: "Flutter - NodeJS - MongoDB",
    alterText: "Motion Graphy",
    portfolioLink: "",
  },
  {
    img: "2",
    title: "College Mobile App",
    subTitle: "Flutter - Flask - MongoDB",
    alterText: "Business Mockup",
    portfolioLink: "",
  },
  {
    img: "4",
    title: "Chat Application",
    subTitle: "Flutter - Firebase",
    alterText: "Chat Application",
    portfolioLink: "https://github.com/chadiayari/Chat-App-Flutter-Firebase",
  },
];
const AiPortfolioContent = [
  {
    img: "6",
    title: "Image Classifier",
    subTitle: "Python: TenserFlow - Cifar10",
    alterText: "Image Classifier",
    portfolioLink: "https://github.com/chadiayari/imageClassification",
  },
];

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="positon-relative">
        <div className="portfolio-filter-01">
          <Tabs>
            <TabList className="filter d-flex justify-content-center">
              {tabList.map((val, i) => (
                <Tab key={i}>{val}</Tab>
              ))}
            </TabList>
            {/* End tablist */}

            <SRLWrapper>
              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.png`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.png`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {WebPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.png`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.png`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {MobilePortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.png`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.png`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {AiPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.png`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.png`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* grid item  */}
                </div>
                {/* End list wrapper */}
              </TabPanel>
            </SRLWrapper>
            {/* End tabpanel */}
          </Tabs>
        </div>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
