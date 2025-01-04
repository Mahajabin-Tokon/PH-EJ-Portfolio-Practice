import React from "react";
import PetsProjectImg from "../../assets/PetsProject.png";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Pets = () => {
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
          <img src={PetsProjectImg} alt="Home Design Project Image" />
        </figure>
        <div className="card-body">
          <h2 className="text-6xl">Pets Project</h2>
          <h2 className="text-3xl">Description</h2>
          <p>
            This is website for pet adoption. You can view available pets and
            filter via animal category and add liked ones to a list and adopt
            your favourite
          </p>
          <h2 className="text-3xl">Tech Stack</h2>
          <p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Media queries for seamless user experience on all devices.</li>
          </p>
          <h2 className="text-3xl">Live Link</h2>
          <a href="https://lighthearted-pithivier-2daada.netlify.app/">
            https://lighthearted-pithivier-2daada.netlify.app/
          </a>
          <h2 className="text-3xl">GitHub Link</h2>
          <a href="https://github.com/programming-hero-web-course2/b10a6-pet-adoption-Mahajabin-Tokon.git">
            https://github.com/programming-hero-web-course2/b10a6-pet-adoption-Mahajabin-Tokon.git
          </a>
          <h2 className="text-3xl">Lackings</h2>
          <p>
            <li>No pagination</li>
            <li>No data saved</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pets;
