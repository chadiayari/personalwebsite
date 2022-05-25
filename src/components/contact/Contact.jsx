import React from "react";
import { useForm } from "react-hook-form";
require("dotenv").config();

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "ssss" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  nodemailer = require("nodemailer");

  transporter = this.nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL || "chadiayari@mes.ac.in", // TODO: your gmail account
      pass: process.env.PASSWORD || "oussamahouess", // TODO: your gmail password
    },
  });
  mailOptions = {
    from: "chadiayari@mes.ac.in", // TODO: email sender
    to: "info@chadiayari.com", // TODO: email receiver
    subject: "chadi ayari form",
    text: "this is a test that it works!!",
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    this.transporter.sendMail(this.mailOptions, (err, data) => {
      if (err) {
        alert("Error occurs");
      }
      alert("Email sent!!!");
    });

    //alert("A name was submitted: " + this.state.value);
    // event.preventDefault();
  }

  render() {
    return (
      <>
        <form className="contct-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                />
                <label className="form-label">Name</label>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  // {...register(
                  //   "email",
                  //   {
                  //     required: "Email is Required",
                  //     pattern: {
                  //       value: /\S+@\S+\.\S+/,
                  //       message: "Entered value does not match email format",
                  //     },
                  //   },
                  //   { required: true }
                  // )}
                />
                <label className="form-label">Email</label>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
                <label className="form-label">Subject</label>
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-12">
              <div className="form-group">
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Type comment"
                ></textarea>
                <label className="form-label">Comment</label>
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-12">
              <div className="btn-bar">
                <button type="submit" className="px-btn px-btn-theme">
                  Send your message
                </button>
              </div>
            </div>
            {/* End .col-12 */}
          </div>
        </form>
      </>
    );
  }
}
export default Contact;
