import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./SectionTitle";
import SectionOverlayText from "./SectionOverlayText";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.from(".service-card", {
      stagger: 0.2,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".services",
        start: "top 60%",
        end: "top 20%",
      },
    });
  });
  return (
    <section id="services" className="services section position-relative">
      <SectionOverlayText text="my services" />
      <SectionTitle subtitle="How I can help your next project" title="What i do" />
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1550: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        dir="ltr"
        className="swiper service-swiper"
      >
        <SwiperSlide className="overflow-visible p-3">
          <div className="service-card">
            <div className="card-inner"></div>
            <div className="content">
              <div className="number-circle">
                <div className="waves-top-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>01</h2>
                <div className="waves-bottom-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <h4>Power BI Development & Reporting</h4>
              <ul className="service-list">
                <li>
                  <i className="ph ph-caret-double-right"></i> Interactive & paginated reports
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> KPI dashboard creation
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> DAX, RLS, performance tunin
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> CI/CD deployment pipelines
                </li>
                {/* <li>
                  <i className="ph ph-caret-double-right"></i> Mobile App Design
                </li> */}
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-visible p-3">
          <div className="service-card">
            <div className="card-inner"></div>
            <div className="content">
              <div className="number-circle">
                <div className="waves-top-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>02</h2>
                <div className="waves-bottom-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <h4>Data Engineering & ETL (Microsoft Fabric)</h4>
              <ul className="service-list">
                <li>
                  <i className="ph ph-caret-double-right"></i> Power Query, Spark, SQL
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> Data ingestion from multiple sources
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> Automated pipelines (Dataflows Gen2)
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> Scalable processing in OneLake
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-visible p-3">
          <div className="service-card">
            <div className="card-inner"></div>
            <div className="content">
              <div className="number-circle">
                <div className="waves-top-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>03</h2>
                <div className="waves-bottom-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <h4>Data Modeling & Semantic Laye</h4>
              <ul className="service-list">
                <li>
                  <i className="ph ph-caret-double-right"></i> Star schema, facts & dimensions
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> Centralized and certified datasets
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> Advanced DAX & calculation groups
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> Reusable semantic models
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-visible p-3">
          <div className="service-card">
            <div className="card-inner"></div>
            <div className="content">
              <div className="number-circle">
                <div className="waves-top-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>04</h2>
                <div className="waves-bottom-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <h4>BI & Data Strategy Consulting</h4>
              <ul className="service-list">
                <li>
                  <i className="ph ph-caret-double-right"></i> Needs analysis & stakeholder alignment
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> BI architecture & governance
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> Adoption strategy & internal training
                </li>
                <li>
                  <i className="ph ph-caret-double-right"></i> Roadmap development for BI maturity
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
      </Swiper>
      <div className="col-12">
        <Link href="#attainments" className="d-flex gap-4 align-items-center next-chapter">
          <span className="page">03/11</span>
          <span className="next">Next Chapter</span>

          <i className="ph ph-arrow-elbow-right-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Services;
