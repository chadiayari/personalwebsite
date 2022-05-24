import React from "react";

const ServiceContent = [
  {
    icon: "ti-ruler-pencil",
    no: "01",
    service: "RESPONSIVE LAYOUT",
    title: "Responsive layout design meeting clients needs.",
  },
  {
    icon: "ti-image",
    no: "02",
    service: "DEVELOPMENT",
    title: "Development gorgeous graphic design meeting clients needs.",
  },
  {
    icon: "ti-layout",
    no: "03",
    service: "UI/UX",
    title: "Attractive User Interface, interactive User Experience.",
  },
  {
    icon: "ti-brush-alt",
    no: "04",
    service: "CLEAN CODE",
    title: "Easily understandble, easily exchangeable.",
  },
  {
    icon: "ti-time",
    no: "05",
    service: "PUNCTUAL",
    title: "Getting the job done within the exact agreed amount of time.",
  },
  {
    icon: "ti-world",
    no: "06",
    service: "CI/CD",
    title: "Working in Agile method with DevOps approach.",
  },
];

const ServiceTwo = () => {
  return (
    <>
      <div className="row gy-4">
        {ServiceContent.map((val, i) => (
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
    </>
  );
};

export default ServiceTwo;
