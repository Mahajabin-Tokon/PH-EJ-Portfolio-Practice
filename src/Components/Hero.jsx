import React from "react";
import myPhoto from "../assets/Mahajabin_Tokon.jpeg";
import myResume from "../assets/Resume.pdf";

const Hero = () => {
  return (
    <section id="hero" className="hero bg-base-200 min-h-screen my-10">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src={myPhoto}
          className="max-w-60 md:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">FrontEnd Developer</h1>
          <a
            href={myResume}
            download
            className="btn bg-slate-800 text-white my-10"
          >
            Resume
          </a>
          <a
            href="https://github.com/Mahajabin-Tokon"
            target="_blank"
            className="btn bg-slate-800 text-white my-10 ml-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mahajabintokon/"
            target="_blank"
            className="btn bg-slate-800 text-white my-10 ml-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
