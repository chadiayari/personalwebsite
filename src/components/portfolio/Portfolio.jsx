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
    portfolioLink:
      "https://play.google.com/store/apps/details?id=com.alightcreative.motion&hl=en&gl=US",
  },
  {
    img: "3",
    title: "Driving School Website",
    subTitle: "Wordpress",
    alterText: "Elearning App",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: "2",
    title: "College Mobile App",
    subTitle: "Flutter - Flask - MongoDB",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },
  {
    img: "4",
    title: "Event Hub: create events online",
    subTitle: "ReactJS - NodeJS - MongoDB",
    alterText: "Event Hub: create events online",
    portfolioLink:
      "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
  },
  {
    img: "7",
    title: "Chat Application",
    subTitle: "Flutter - Firebase",
    alterText: "Chat Application",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: "6",
    title: "Image Classifier",
    subTitle: "Python: TenserFlow - Cifar10",
    alterText: "Image Classifier",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
];
const WebPortfolioContent = [
  {
    img: "3",
    title: "Driving School Website",
    subTitle: "Wordpress",
    alterText: "Elearning App",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: "4",
    title: "Event Hub: create events online",
    subTitle: "ReactJS - NodeJS - MongoDB",
    alterText: "Event Hub: create events online",
    portfolioLink:
      "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
  },
];

const MobilePortfolioContent = [
  {
    img: "1",
    title: "Buying Shares Mobile App",
    subTitle: "Flutter - NodeJS - MongoDB",
    alterText: "Motion Graphy",
    portfolioLink:
      "https://play.google.com/store/apps/details?id=com.alightcreative.motion&hl=en&gl=US",
  },
  {
    img: "2",
    title: "College Mobile App",
    subTitle: "Flutter - Flask - MongoDB",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },
  {
    img: "7",
    title: "Chat Application",
    subTitle: "Flutter - Firebase",
    alterText: "Chat Application",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
];
const AiPortfolioContent = [
  {
    img: "6",
    title: "Image Classifier",
    subTitle: "Python: TenserFlow - Cifar10",
    alterText: "Image Classifier",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
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
                            href={`img/portfolio/${val.img}.jpg`}
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
                            href={`img/portfolio/${val.img}.jpg`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.jpg`}
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
                            href={`img/portfolio/${val.img}.jpg`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.jpg`}
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
                            href={`img/portfolio/${val.img}.jpg`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.jpg`}
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
