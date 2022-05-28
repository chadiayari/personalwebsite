import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  return (
    <>
      <div className="col-12">
        <div className="btn-bar mt-4">
          <a
            className="px-btn px-btn-theme btn-md"
            href="mailto:info@chadiayari.com"
          >
            Send me a message
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
