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
          <h2>I&apos;m Ayoub, a Consultant Power BI</h2>
          <p className="desc">
            With over 3 years of experience delivering end-to-end data solutions and insights for diverse industries. Proven track record in designing 22+ interactive Power BI dashboards that boosted decision-making speed by 70%.
            <br />
            Actively seeking a role as a Data & Analytics Consultant or Power BI Specialist in an innovative company committed to data-driven growth.{" "}
          </p>
          <div className="row about-contact">
            <div className="col-sm-4 about-contact-item">
              <h3>Email:</h3>
              <Link href="mailto:chat@portify.com">saberayoubsmatti@gmail.com</Link>&apos;
            </div>
            <br />
            {/* <div className="col-sm-4 about-contact-item">
              <p>Date of Birth:</p>
              <span>14 february, 1996</span>
            </div> */}
            {/* <div className="col-sm-4 about-contact-item">
              <p>Email:</p>
              <span>Quebec, Canada</span>
            </div> */}
          </div>
        </div>
        <div className="col-lg-5 col-xl-4">
          <div className="experience-card">
            <div className="card-inner"></div>
            <div>
              <div className="numbers">
                <span className="number-outline-one">3</span>
                <span className="number-outline-two">3</span>
                <span className="number-main">3</span>
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
