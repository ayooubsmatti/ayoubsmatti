import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [submitBtn, setSubmitBtn] = useState("Submit");
  const form = useRef<HTMLFormElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".section-title-overlay-text",
      { y: "50%" },
      {
        y: "-50%",
        scrollTrigger: {
          trigger: ".contact",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    gsap.from(".submit-btn", {
      scale: 0,
      duration: 3.5,
      ease: "elastic",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".submit-btn",
      },
    });
    gsap.from(".contact-item", {
      scale: 0,
      duration: 0.8,
      ease: "back",
      scrollTrigger: {
        trigger: ".contact-items",
      },
    });
    gsap.from(".contact-input", {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".contact-input",
      },
    });
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitBtn("Sending...");

    emailjs
      .sendForm(
        "service_um11lns", // Service ID
        "template_llnauhl", // Template ID
        form.current!,
        { publicKey: "s_sVPeWrvQzKtHzOz" }, // Public Key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current?.reset();
          setSubmitBtn("Success");
          setTimeout(() => setSubmitBtn("Submit"), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setSubmitBtn("Try Again");
          setTimeout(() => setSubmitBtn("Submit"), 3000);
        },
      );
  };

  return (
    <section id="contact" className="contact section position-relative">
      <span className="section-title-overlay-text">contact</span>
      <SectionTitle subtitle="Let's Get in touch" title="Contact me" />

      <div className="row pb-120 contact-items">{/* ...tes blocs de coordonnées inchangés... */}</div>

      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <h4>Leave a Message</h4>
        <div className="row g-4 g-xl-5">
          <div className="col-sm-6 contact-input">
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="name" required placeholder="Your name" />
          </div>
          <div className="col-sm-6 contact-input">
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="email" required placeholder="Your e-mail" />
          </div>
          <div className="col-12 contact-input">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="Your message" />
          </div>
          <div className="col-12">
            <button type="submit" className="submit-btn position-relative">
              <div className="waves-top-md">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {submitBtn}
              <div className="waves-bottom-md">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </form>

      <div className="col mt-5 pt-5 next-chapter">
        <span className="page">09/09</span>
      </div>
    </section>
  );
};

export default Contact;
