import { useState, forwardRef } from "react";
import "./ContactForm.css";

const FORM_ENDPOINT = "https://whitebricks.com/tsacademy.php";
const MESSAGE_MIN = 100;

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = forwardRef(function ContactForm(_, ref) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) errs.name = "Full name is required.";

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (
      !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,10}$/.test(
        formData.phone.replace(/\s/g, ""),
      )
    ) {
      errs.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      errs.message = "Message is required.";
    } else if (formData.message.trim().length < MESSAGE_MIN) {
      errs.message = `Message must be at least ${MESSAGE_MIN} characters.`;
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, val]) => body.append(key, val));
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body });
      if (res.ok) {
        setStatus("success");
        setFormData(initialState);
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const charCount = formData.message.length;
  const charMet = charCount >= MESSAGE_MIN;

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        {/* ── Heading ── */}
        <div className="contact-section__heading">
          <h2 className="contact-section__title">
            Have Questions About Planetary Science?
          </h2>
          <p className="contact-section__subtitle">
            Interested in learning more about space, astronomy, or how planetary
            data is collected and analyzed? Reach out and we&apos;ll get back to
            you.
          </p>
        </div>

        {/* ── Feedback banners ── */}
        {status === "success" && (
          <div
            className="contact-form__alert contact-form__alert--success"
            role="alert"
          >
            Your message has been sent successfully. We&apos;ll be in touch
            soon!
          </div>
        )}
        {status === "error" && (
          <div
            className="contact-form__alert contact-form__alert--error"
            role="alert"
          >
            Something went wrong. Please try again later.
          </div>
        )}

        {/* ── Form ── */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
        >
          {/* Row 1 — Name + Email */}
          <div className="contact-form__row">
            <div className="contact-form__group">
              <label htmlFor="name">
                Full Name<span className="contact-form__required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                aria-required="true"
                aria-describedby={errors.name ? "name-error" : undefined}
                className={errors.name ? "input--error" : ""}
              />
              {errors.name && (
                <span
                  className="contact-form__error"
                  id="name-error"
                  role="alert"
                >
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact-form__group">
              <label htmlFor="email">
                Email<span className="contact-form__required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                aria-required="true"
                aria-describedby={errors.email ? "email-error" : undefined}
                className={errors.email ? "input--error" : ""}
              />
              {errors.email && (
                <span
                  className="contact-form__error"
                  id="email-error"
                  role="alert"
                >
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Row 2 — Phone + Message */}
          <div className="contact-form__row contact-form__row--bottom">
            <div className="contact-form__group">
              <label htmlFor="phone">
                Phone Number<span className="contact-form__required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Please enter a valid phone number."
                aria-required="true"
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={errors.phone ? "input--error" : ""}
              />
              {errors.phone && (
                <span
                  className="contact-form__error"
                  id="phone-error"
                  role="alert"
                >
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="contact-form__group">
              <label htmlFor="message">
                Message<span className="contact-form__required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                aria-required="true"
                aria-describedby="message-counter message-error"
                className={errors.message ? "input--error" : ""}
              />
              <span
                id="message-counter"
                className={`contact-form__counter ${charMet ? "contact-form__counter--met" : ""}`}
              >
                {charCount} character{charCount !== 1 ? "s" : ""}
              </span>
              {errors.message && (
                <span
                  className="contact-form__error"
                  id="message-error"
                  role="alert"
                >
                  {errors.message}
                </span>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="contact-form__submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Submit"}
            {status !== "loading" && (
              <span className="contact-form__arrow">&#8250;</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
});

export default ContactForm;
