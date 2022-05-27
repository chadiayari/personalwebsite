import React from "react";

import { CubeTransition } from "react-3d-cube-transition";
import "react-3d-cube-transition/dist/index.css";

class Cube extends React.Component {
  ServiceContent = [
    {
      icon: "ti-ruler-pencil",
      no: "01",
      service: "WEB & MOBILE DEV",
      title: "Mobile and web development? I got you covered! ",
    },
    {
      icon: "ti-shopping-cart",
      no: "02",
      service: "E-COMMERCE DEVELOPMENT",
      title: "Large experience in using the most powerful CMSs",
    },
    {
      icon: "ti-layout",
      no: "03",
      service: "UI/UX",
      title: "Attractive User Interface. Interactive User Experience.",
    },
    {
      icon: "ti-brush-alt",
      no: "04",
      service: "CLEAN CODE",
      title: "Easily understandble. Easily exchangeable.",
    },
    {
      icon: "ti-time",
      no: "05",
      service: "PUNCTUAL",
      title: "Getting the job done within the exact agreed time frame.",
    },
    {
      icon: "ti-world",
      no: "06",
      service: "CI/CD",
      title: "Working in Agile method with DevOps approach.",
    },
  ];
  constructor() {
    super();

    this.state = { currentFace: "front" };

    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
  }

  render() {
    return (
      <CubeTransition
        face={this.state.currentFace}
        frontCSS={{ background: "#000" }}
        rightCSS={{ background: "#b43b6c" }}
        leftCSS={{ background: "#5519c4" }}
        backCSS={{ background: "#36d40e" }}
        topCSS={{ background: "#14cccc" }}
        bottomCSS={{ background: "#ad1616" }}
        frontPage={this._buttons()}
        leftPage={this._buttons()}
        rightPage={this._buttons()}
        backPage={this._buttons()}
        topPage={this._buttons()}
        bottomPage={this._buttons()}
        contentElevation={15}
        button={this._buttons()}
      />
    );
  }

  _buttons() {
    return (
      <div className="row gy-4">
        {this.ServiceContent.map((val, i) => (
          <div className="col-sm-6 col-lg-4" key={i}>
            <div className="feature-box-02">
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <h6>
                <span>{val.no}.</span> {val.service}
              </h6>
              <h5>{val.title}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  }

  onNext() {
    this.setState({ currentFace: "left" });
    this.setState({ currentFace: "right" });
  }

  onPrevious() {
    this.setState({ currentFace: "top" });
  }
}

export default Cube;
