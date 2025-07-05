import Link from "next/link";
import React from "react";
import SectionTitle from "./SectionTitle";
import SectionOverlayText from "./SectionOverlayText";
const AboutMe = () => {
  return (
    <section id="about_me" className="about section">
      <SectionOverlayText text="About Me" />
      <SectionTitle subtitle="Some Word About Me" title="Know Me More" />
      <div className="row mb-4 mb-lg-5 align-items-center">
        <div className="col-lg-7 col-xl-8 about-desc">
          <h2>I&apos;m Ayoub Smatti, a Web Developer</h2>
          <p className="desc">
            I&apos;m a Data analyste &amp; developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which
            meets client&apos;s requirements is our moto.
          </p>
          <div className="row about-contact">
            <div className="col-sm-4 about-contact-item">
              <p>Email:</p>
              <Link href="mailto:chat@portify.com">chat@portify.com</Link>
            </div>
            <div className="col-sm-4 about-contact-item">
              <p>Date of Birth:</p>
              <span>11 November, 1987</span>
            </div>
            <div className="col-sm-4 about-contact-item">
              <p>Email:</p>
              <span>Los Angeles, California</span>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4">
          <div className="experience-card">
            <div className="card-inner"></div>
            <div>
              <div className="numbers">
                <span className="number-outline-one">10</span>
                <span className="number-outline-two">10</span>
                <span className="number-main">10</span>
              </div>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Link href="#services" className="d-flex gap-4 align-items-center next-chapter">
          <span className="page">02/11</span>
          <span className="next">Next Chapter</span>
          <span className="icon">
            <i className="ph ph-arrow-elbow-right-down"></i>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
