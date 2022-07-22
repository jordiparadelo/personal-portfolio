import React, { useState } from "react";
// Styles
import "./Footer.scss";
// Data
import { client } from "../../clients";
// Lib
import { formValidator } from "../../utils";
import { useForm } from "react-hook-form";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { name, email, message } = formData;

  // Methods
  function handleChangeInput(e) {
    const { name, value } = e.target;

}

function onSubmit(data) {
    if(!data) return;
    console.log(data)
    setFormData({ ...formData, ...data });
    
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
    <footer id="Footer">
      <div className="app__wrapper">
        <header className="app__header">
          <h2>
            Get a project? <br /> Let's talk.
          </h2>
          <p>
            You can just contact me by email o filling the following contact
            form
          </p>
        </header>

        {isFormSubmitted ? (
          <h3>Thanks you for getting in touch!</h3>
        ) : (
          <form
            className="footer__contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="input-group">
              <label htmlFor="name">What's your name?</label>
              <input
                type="text"
                {...register("name", { required: true, minLength: 3 })}
                onChange={handleChangeInput}
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
                {...register("email", { required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i })}
                data-required
              />
              {errors.email?.type.includes("required") && (
                <div className="status-message">Please enter your email</div>
              )}
              {errors.email?.type.includes("pattern") && (
                <div className="status-message">There is a problem in your email format</div>
              )}
            </div>
            <textarea
              {...register("message")}
              cols="30"
              rows="10"
              placeholder="Tell me about your proyect"
            ></textarea>
            <button className="primary">
              {loading ? "Sending..." : "Send Preposition"}
            </button>
          </form>
        )}
      </div>
    </footer>
  );
};

export default Footer;
