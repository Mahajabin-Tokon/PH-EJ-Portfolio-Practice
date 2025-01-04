import React from "react";
import BookishProjectImg from "../../assets/BookishProject.png";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Bookish = () => {
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
          <img src={BookishProjectImg} alt="Home Design Project Image" />
        </figure>
        <div className="card-body">
          <h2 className="text-6xl">Bookish</h2>
          <h2 className="text-3xl">Description</h2>
          <p>
            This project is a dynamic and user-friendly web application for
            managing a digital library, built using React. It features an
            intuitive interface with components like a Navbar, Banner, and
            Footer, enhancing user experience. Users can explore book categories
            (e.g., Business, Fantasy, Romance), view detailed book information,
            and manage borrowed books. Authentication is securely handled via
            Firebase, and private routes ensure authorized access. Features
            include adding, updating, and managing books. The app employs
            modular layouts, custom error handling, and responsive design.
          </p>
          <h2 className="text-3xl">Tech Stack</h2>
          <p>
            <li>sweetalert2</li>
            <li>firebase</li>
            <li>react</li>
            <li>react-dom</li>
            <li>react-icons</li>
            <li>react-router-dom</li>
            <li>axios</li>
            <li>date-fns</li>
            <li>react-rating-stars-component</li>
            <li>swiper</li>
            <li>motion</li>
          </p>
          <h2 className="text-3xl">Live Link</h2>
          <a href="https://assignment11-f7541.web.app/">
            https://assignment11-f7541.web.app/
          </a>
          <h2 className="text-3xl">GitHub Link</h2>
          <a href="https://github.com/programming-hero-web-course2/b10a11-client-side-Mahajabin-Tokon.git">
            Client:
            https://github.com/programming-hero-web-course2/b10a11-client-side-Mahajabin-Tokon.git
          </a>
          <a href="https://github.com/programming-hero-web-course2/b10a11-server-side-Mahajabin-Tokon.git">
            Server:
            https://github.com/programming-hero-web-course2/b10a11-server-side-Mahajabin-Tokon.git
          </a>
          <h2 className="text-3xl">Lackings</h2>
          <p>
            <li>User Reviews are not dynamic</li>
            <li>UX not good as it is not clear how to borrow a book</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookish;
