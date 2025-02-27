import { FC, useState, FormEvent, ChangeEvent } from "react";
import { IonIcon } from "@ionic/react";
import { paperPlane, checkmarkCircle, alertCircle } from "ionicons/icons";

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    status: "idle" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission using Formspree
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Reset status and set loading
    setSubmitStatus({ status: "idle", message: "" });
    setIsSubmitting(true);

    try {
      // Send data to your Formspree endpoint
      const response = await fetch("https://formspree.io/f/movjgvqq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Parse response
      const result = await response.json();

      if (response.ok) {
        // Handle success
        setSubmitStatus({
          status: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });

        // Reset form
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
      } else {
        // Handle error from Formspree
        setSubmitStatus({
          status: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      // Handle network or other errors
      setSubmitStatus({
        status: "error",
        message:
          "Failed to send message. Please check your connection and try again.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.934296540729!2d7.040090545771117!3d6.199754682930472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104382d7a13cc98f%3A0xfb03e29e94284df!2sAmawbia%2C%20Anambra!5e0!3m2!1sen!2sng!4v1728048260949!5m2!1sen!2sng"
            width="400"
            height="300"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={formData.message}
            onChange={handleChange}
          />

          {submitStatus.status !== "idle" && (
            <div className={`form-alert ${submitStatus.status}`}>
              <IonIcon
                icon={
                  submitStatus.status === "success"
                    ? checkmarkCircle
                    : alertCircle
                }
                className="alert-icon"
              />
              <p>{submitStatus.message}</p>
            </div>
          )}

          <button
            className="form-btn"
            type="submit"
            disabled={isSubmitting}
            data-form-btn
          >
            <IonIcon icon={paperPlane} />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
