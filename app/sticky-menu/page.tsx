"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Attainments from "@/components/Attainments";
import FunFacts from "@/components/FunFacts";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import HowIWork from "@/components/HowIWork";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Icon from "@/public/images/icon.png";
import Link from "next/link";
import Blogs from "@/components/Blogs";
export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
      document.documentElement.style.setProperty("--primary", savedColor);
    }
    const savedDir = localStorage.getItem("dir");
    if (savedDir) {
      document.documentElement.dir = savedDir;
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loader-container w-100  d-flex align-items-center justify-content-center">
        <div className="loader"></div>;
      </div>
    );
  }
  return (
    <>
      <Header navOpen={navOpen} classes="d-xl-none" setNavOpen={setNavOpen} />

      {/* <!-- main content --> */}
      <main className="container">
        <div className="col-12" data-bs-spy="scroll" data-bs-target="#navigation">
          {/* <!-- hero --> */}

          <Hero classes="hero-left-bar" />

          <nav className={`navigation-sticky ${navOpen ? "opened" : ""}`} id="navigation">
            <Image src={Logo} className="d-xl-none d-xxl-block" height="40" alt="logo" />
            <ul>
              <li className="nav-link">
                <Link href="#top" className="active">
                  <span className="text">top</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#about_me">
                  <span className="text">about me</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#services">
                  <span className="text">my services</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#attainments">
                  <span className="text">skills</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#fun_facts">
                  <span className="text">facts</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#experience">
                  <span className="text">experiences</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#projects">
                  <span className="text">projects</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#how_i_work">
                  <span className="text">how i work</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#testimonials">
                  <span className="text">testimonials</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#contact">
                  <span className="text">contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="nav-overlay d-xl-none" onClick={() => setNavOpen(false)}></div>

          {/* <!-- about me --> */}
          <AboutMe />

          {/* <!-- services --> */}
          <Services />

          {/* <!-- attainments --> */}
          <Attainments />

          {/* <!-- fun facts --> */}
          <FunFacts />

          {/* <!-- experience --> */}
          <Experience />

          {/* <!-- projects --> */}
          <Projects />

          {/* <!-- how i work --> */}
          <HowIWork />

          {/* blogs */}
          <Blogs />
          {/* <!-- testimonials --> */}
          <Testimonials />

          {/* <!-- contact --> */}
          <Contact />
        </div>
      </main>
      {/* <!-- color switcher --> */}
    </>
  );
}
