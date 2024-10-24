import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name) {
      formErrors.name = "Full Name is required";
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.tel) {
      formErrors.tel = "Phone number is required";
      valid = false;
    } else if (!/^\d+$/.test(formData.tel)) {
      formErrors.tel = "Phone number is invalid";
      valid = false;
    }

    if (!formData.subject) {
      formErrors.subject = "Subject is required";
      valid = false;
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If the form is valid, show success message
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
        alert("Message sent successfully!");
      }, 200);
      setFormData({
        name: "",
        email: "",
        tel: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="section kf-contacts-form">
      <div className="container">
        <div
          className="kf-reservation-form element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="kf-titles align-center">
            <div className="kf-subtitle">Contact Us</div>
            <h3 className="kf-title">Send Us Message</h3>
          </div>
          <form id="cform" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                  <i className="far fa-user" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                  <i className="fas fa-at" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-field">
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone Number"
                    value={formData.tel}
                    onChange={handleInputChange}
                  />
                  {errors.tel && <p className="error">{errors.tel}</p>}
                  <i className="fas fa-mobile-alt" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-field">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  {errors.subject && <p className="error">{errors.subject}</p>}
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-field">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && <p className="error">{errors.message}</p>}
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-bts">
                  <button type="submit" className="kf-btn">
                    <span>Send us message</span>
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
          {successMessage && (
            <div className="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
