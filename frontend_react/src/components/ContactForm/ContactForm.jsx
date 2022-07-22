import React, { useState } from "react";
// Styles
import "./ContactForm.scss";
// Lib
import { useForm } from "react-hook-form";
// Data
import { client } from "../../clients";

const ContactForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Methods
  function onSubmit(data) {
    if (!data) return;

    const { name, email, message } = data;
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  }

  return (
    <>
      {isFormSubmitted ? (
        <div className="form__greeting-message">
            <h3>Thanks you for getting in touch!</h3>
            <p>Still have things to say, send me another <a onClick={() => setIsFormSubmitted(false)}>message</a></p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="name">What's your name?</label>
            <input
              type="text"
              {...register("name", { required: true, minLength: 3 })}
              data-required
            />

            {errors.name?.type.includes("required") && (
              <div className="status-message">Please enter your name</div>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="email">Contact email</label>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
              })}
              data-required
            />
            {errors.email?.type.includes("required") && (
              <div className="status-message">Please enter your email</div>
            )}
            {errors.email?.type.includes("pattern") && (
              <div className="status-message">
                There is a problem in your email format
              </div>
            )}
          </div>
          <textarea
            {...register("message")}
            cols="30"
            rows="10"
            placeholder="Tell me about your proyect"
          ></textarea>
          <button className="primary">
            {loading ? "Sending..." : "Send Proposal"}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
