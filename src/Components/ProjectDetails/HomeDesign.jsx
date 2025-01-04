import React from "react";
import HomeDesignProjectImg from "../../assets/HomeDesignProject.png";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const HomeDesign = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 px-2">
      <Link to="/" className="">
        <div className="flex items-center justify-start gap-1 py-5 font-bold">
          <IoMdArrowRoundBack />
          Back
        </div>
      </Link>
      <div className="card bg-base-100 shadow-xl">
        <figure className="border-2 border-slate-400">
          <img src={HomeDesignProjectImg} alt="Home Design Project Image" />
        </figure>
        <div className="card-body">
          <h2 className="text-6xl">Riterio: Modern Homes</h2>
          <h2 className="text-3xl">Description</h2>
          <p>
            Riterio is a fully responsive, aesthetically pleasing website that
            serves as a showcase for modern residential and commercial design
            projects. The website highlights innovative design processes,
            captivating portfolios, and exceptional customer reviews, providing
            users with an immersive experience. It is built using Tailwind CSS
            and DaisyUI for fast, scalable, and reusable components.
          </p>
          <h2 className="text-3xl">Tech Stack</h2>
          <p>
            <li>
              Tailwind CSS: Utility-first CSS framework for rapid UI
              development.
            </li>
            <li>
              DaisyUI: Component library for consistent and responsive design.
            </li>
            <li>
              FontAwesome: Iconography for enhanced navigation and
              interactivity.
            </li>
            <li>
              Google Fonts: Manrope: Elegant typography for content and
              headings.
            </li>
            <li>
              HTML5: Semantic structure and accessibility. Responsive Design:
            </li>
            <li>Media queries for seamless user experience on all devices.</li>
          </p>
          <h2 className="text-3xl">Live Link</h2>
          <a href="https://mahajabin-tokon.github.io/PHA3-Riterio-ModernHomes/">
            https://mahajabin-tokon.github.io/PHA3-Riterio-ModernHomes/
          </a>
          <h2 className="text-3xl">GitHub Link</h2>
          <a href="https://github.com/Mahajabin-Tokon/PHA3-Riterio-ModernHomes.git">
            https://github.com/Mahajabin-Tokon/PHA3-Riterio-ModernHomes.git
          </a>
          <h2 className="text-3xl">Lackings</h2>
          <p>
            <li>Buttons are not functional</li>
            <li>Cannot view more photos of each home design</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDesign;
