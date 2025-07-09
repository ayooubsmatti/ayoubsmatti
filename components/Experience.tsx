import Image from "next/image";
import React from "react";
import arrow from "@/public/images/arrow.png";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionTitle from "./SectionTitle";
import SectionOverlayText from "./SectionOverlayText";

const Experience = () => {
  useGSAP(() => {
    gsap.from(".experience-item", {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".experience-item",
      },
    });

    gsap.utils.toArray(".experience-item").forEach((item: any) => {
      gsap.to(item, {
        "--item-height": "100%",
        stagger: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 20%",
        },
      });
    });

    gsap.to(".experience-wrapper", {
      duration: 2,
      ease: "back",
      delay: 0.5,
      "--height": "100%",
      scrollTrigger: {
        trigger: ".experience-wrapper",
      },
    });
  });
  return (
    <section id="experience" className="experience section position-relative">
      <SectionOverlayText text="experiences" />
      <SectionTitle subtitle="Highlight My key Experiences" title="My Experience" />
      <div className="row pb-60">
        <div className="col-lg-10 col-xl-8">
          <div className="experience-wrapper d-flex flex-column">
            <div className="experience-item">
              <h5>(Dec 2024 - Present)</h5>
              <h3>Data Analyst, PowerBI Developer:</h3>
              <p>
                • Automated manual Excel-based reports with Power BI, reducing report preparation time by 80%. • Conducted Exploratory Data Analysis (EDA) to identify data quality issues, patterns, and key trends for reporting. • Designed interactive dashboards used by 12+ stakeholders (Sales and
                Marketing department). • Built a predictive staffing report using historical data to optimize workforce planning. • Delivered mobile-responsive dashboards and scheduled paginated reports to Sales and Marketing teams daily. • Collaborated with cross-functional teams to align insights
                with operational and strategic business goals.
              </p>
            </div>
            <div className="experience-item">
              <h5>(Sep 2023 - Jan 2024)</h5>
              <h3>Machine Learning Researcher:</h3>
              <p>
                • Prepared and cleaned raw datasets to ensure quality inputs for machine learning models. • Performed Exploratory Data Analysis (EDA) to understand data distributions, detect anomalies, and guide feature selection. • Developed and trained machine learning models, optimizing for
                accuracy and generalization. • Evaluated model performance using appropriate metrics (accuracy, precision, recall, F1-score) to ensure dependable predictions. • Collaborated with cross-functional teams to define and improve evaluation criteria for AI models. • Documented all
                processes and model results to support transparency and reproducibility.
              </p>
            </div>
            <div className="experience-item">
              <h5>(Feb 2020 - Sep 2020)</h5>
              <h3>Internship Data Scientist (Winter 2020):</h3>
              <p>
                • Developed a deep learning model that improved network intrusion detection accuracy and speed. • Built a machine learning classifier for reliable identification of various cyberattack types. • Created a full-stack web application to enable real-time monitoring and management of
                security alerts. • Integrated AI models into a single platform, streamlining data processing and enhancing operational efficiency. • Authored the final year thesis documenting the research, development process, and results.
              </p>
            </div>
            <div className="experience-item">
              <h5>(Dec 2019 - Feb 2020)</h5>
              <h3>Internship Startup Incubation Program:</h3>
              <p>
                • Designed and developed a business model for an innovative startup, focusing on value proposition and market fit. • Created a comprehensive business plan including market research, financial forecasting, and growth strategies. • Coordinated startup launch activities, overseeing
                operations and product development processes. •Presented the project to investors and stakeholders to secure funding and establish strategic partnerships.
              </p>
            </div>
          </div>

          <Link href="resume.pdf" className="download-cv position-relative" download>
            <div className="waves-top-md">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <svg width="45" height="54" viewBox="0 0 45 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 31.449L22.5 52.949L1 31.449L8.98204 23.3382L16.8353 31.449V0.550781H28.1647V31.449L36.018 23.3382L44 31.449Z" stroke="currentColor" />
            </svg>
            <div className="waves-bottom-md">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      </div>

      <div className="col-12">
        <Link href="#projects" className="d-flex gap-4 align-items-center next-chapter">
          <span className="page">06/11</span>
          <span className="next">Next Chapter</span>
          <span className="icon">
            <i className="ph ph-arrow-elbow-right-down"></i>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
