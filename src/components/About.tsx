import { FC } from "react";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

import iconDesign from "../images/icon-design.svg";
import iconDev from "../images/icon-dev.svg";
import iconApp from "../images/icon-app.svg";
import iconPhoto from "../images/icon-photo.svg";

import avatar1 from "../images/avatar-1.png";
import avatar2 from "../images/avatar-2.png";
import avatar3 from "../images/avatar-3.png";
import avatar4 from "../images/avatar-4.png";

// import logo1Color from "../images/logo-1-color.png";
// import logo2Color from "../images/logo-2-color.png";
// import logo3Color from "../images/logo-3-color.png";
// import logo4Color from "../images/logo-4-color.png";
// import logo5Color from "../images/logo-5-color.png";
// import logo6Color from "../images/logo-6-color.png";

const About: FC = () => {
  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Full-stack developer with 6+ years building scalable web applications
          using TypeScript, React.js, and Next.js.
          <br /> I transform complex challenges into intuitive, visually
          appealing solutions that balance form and function.
          <br /> My expertise spans both front-end design with Tailwind CSS and
          Material-UI, and back-end development with Node.js, MongoDB, and
          MySQL.
          <br /> I combine technical precision with creative problem-solving to
          craft digital experiences that are both beautiful and effective,
          helping brands achieve their objectives while delighting users.
        </p>
      </section>

      {/* - service */}

      <section className="service">
        <h3 className="h3 service-title">What I Do</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDev} alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Software Development</h4>

              <p className="service-item-text">
                Custom enterprise-grade solutions with scalable architecture and
                intuitive interfaces that drive business efficiency.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconApp} alt="Mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile Applications</h4>

              <p className="service-item-text">
                Responsive, accessible native applications for iOS and Android
                with seamless user experiences and platform-specific
                optimizations.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconPhoto} alt="Camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Visual Design</h4>

              <p className="service-item-text">
                Distinctive brand identities through compelling visuals
                including logos, marketing materials, and digital assets that
                resonate with target audiences.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDesign} alt="Design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">UX/UI Design</h4>

              <p className="service-item-text">
                Research-driven interface designs that balance aesthetic appeal
                with functional clarity, ensuring accessibility and measurable
                business outcomes.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* - testimonials */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar1}
                  alt="Nilanjan Raychaudhuri"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Nilanjan Raychaudhuri
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Okwudili's contribution to Tublian has been exceptional. His
                  ability to transform complex UI/UX designs into functional
                  interfaces demonstrates his technical expertise. His
                  collaborative approach ensured seamless integration across our
                  AI-driven platform, significantly improving user experience
                  and performance.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar2}
                  alt="Soumya Mandalapu"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Soumya Mandalapu
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Working with Okwudili on both Unspokenn and Bumpit has been a
                  pleasure. His technical skill in React Native and TypeScript
                  is impressive. He consistently delivers high-quality code
                  while maintaining excellent communication with our designers
                  and backend team throughout the development process.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar3}
                  alt="Emeka Dijeh"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Emeka Dijeh
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Okwudili developed our Clay Global Services website with
                  exceptional professionalism. His attention to detail and
                  responsive design expertise resulted in a site that perfectly
                  showcases our services. The website has significantly improved
                  our online presence and client engagement.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar4}
                  alt="Chika Odumodu"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Chika Odumodu
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  I'm impressed with the website Okwudili created for my
                  foundation. He took time to understand our mission and created
                  a digital platform that effectively communicates our values.
                  His implementation of donation options and impact stories has
                  helped us connect with supporters and improve our outreach
                  efforts.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar1}
                  alt="Chizoba Nwuche"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Chizoba Nwuche
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  As CEO of Passport Parliament, I'm thrilled with the website
                  Okwudili developed for us. His intuitive design made our visa
                  and passport services easily accessible to customers. He
                  incorporated our business requirements perfectly and created
                  interactive features that significantly improved our
                  conversion rates.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar2}
                  alt="Zikora Chukwuka"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Zikora Chukwuka
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  As founder of Anambra Techies, I've seen Okwudili's
                  exceptional talent during our SMFest Hackathon where his team
                  secured second place. His technical expertise and
                  problem-solving skills were instrumental to our success. He
                  excels at translating design concepts into functional code and
                  collaborates effectively with teams.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar3}
                  alt="Sunday Ogbonna"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Sunday Ogbonna
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  At Sungoldtech, Okwudili's work on our Girma platform was
                  outstanding. He skillfully converted Figma designs into
                  Next.js code using atomic design principles, ensuring
                  consistency across the platform. His mobile-responsive
                  implementation and attention to performance optimization were
                  crucial for our startup mentorship program.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar4}
                  alt="Akin Akinloye"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Akin Akinloye
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Okwudili's development of Excel2SQL and his contributions to
                  the UK GINIE portal were exceptional. His agile development
                  approach and collaborative pair-programming facilitated
                  efficient delivery of high-quality solutions. He has a
                  remarkable ability to understand client requirements and
                  translate them into functional, user-friendly applications.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar1}
                  alt="Kenechukwu Odumodu"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Kenechukwu Odumodu
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  As a board member at Krosa Model Schools, I've been impressed
                  with Okwudili's comprehensive approach to our digital needs.
                  The custom results portal he developed streamlined our
                  academic processes significantly. His technical expertise
                  combined with his understanding of educational requirements
                  made him an invaluable asset to our institution.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar2}
                  alt="Ikem Odumodu"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Ikem Odumodu
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Okwudili's stock inventory management application for
                  Dumofield Farms transformed our operations. He took the time
                  to understand our specific needs and developed a solution that
                  significantly improved our efficiency. His iterative
                  development approach ensured the final product was perfectly
                  aligned with our business requirements.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* - testimonials modal */}

      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <IonIcon icon={closeOutline} />
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src={avatar1}
                alt="Nilanjan Raychaudhuri"
                width="80"
                data-modal-img
              />
            </figure>

            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Nilanjan Raychaudhuri
            </h4>

            <time dateTime="2023-11-15">15 November, 2023</time>

            <div data-modal-text>
              <p>
                Okwudili's contribution to Tublian has been exceptional. His
                ability to transform complex UI/UX designs into functional,
                responsive interfaces demonstrates his technical expertise and
                attention to detail. His collaborative approach with our
                cross-functional teams ensured seamless integration across our
                platform. His work on our AI-driven features significantly
                improved user experience and platform performance.
              </p>
              <p>
                What sets Okwudili apart is his proactive approach to
                problem-solving and his dedication to staying current with
                industry trends. He consistently delivered high-quality code
                while meeting tight deadlines. His communication skills
                facilitated smooth collaboration with our distributed teams,
                making him an invaluable asset to our development process.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* - clients */}

      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src={logo1Color} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={logo2Color} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={logo3Color} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={logo4Color} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={logo5Color} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={logo6Color} alt="client logo" />
            </a>
          </li>
        </ul>
      </section> */}
    </article>
  );
};

export default About;
