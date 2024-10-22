import { FC } from "react";
import { IonIcon } from "@ionic/react";
import { paperPlane } from "ionicons/icons";

const Contact: FC = () => {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.934296540729!2d7.040090545771117!3d6.199754682930472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104382d7a13cc98f%3A0xfb03e29e94284df!2sAmawbia%2C%20Anambra!5e0!3m2!1sen!2sng!4v1728048260949!5m2!1sen!2sng"
            width="400"
            height="300"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          />

          <button className="form-btn" type="submit" disabled data-form-btn>
            <IonIcon icon={paperPlane} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
