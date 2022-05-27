import React from "react";
import axios from "axios";

function ContactForm() {
  // isSubmitting = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "https://www.chadiayari.com/send",
      data: {
        name: name,
        email: email,
        messsage: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Message Sent, I will get back to you shortly!");
        resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send, please try again.");
      }
    });
  };

  const resetForm = () => {
    document.getElementById("contact-form").reset();
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                id="name"
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
                id="email"
                className="form-control"
                placeholder="Email address"
              />
              <label className="form-label">Email</label>
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                rows="4"
                className="form-control"
                placeholder="Type comment"
                id="message"
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

export default ContactForm;
