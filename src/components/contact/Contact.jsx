import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

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
