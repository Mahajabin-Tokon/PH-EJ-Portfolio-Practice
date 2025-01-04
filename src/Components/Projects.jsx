import HomeDesignProjectImg from "../assets/HomeDesignProject.png";
import PetsProjectImg from "../assets/PetsProject.png";
import BookishProjectImg from "../assets/BookishProject.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <section id="projects" className="p-10 my-10 space-y-5">
      <h2 className="text-6xl">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={HomeDesignProjectImg}
              alt="Home Design Project Image"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Riterio: Modern Homes</h2>
            <div className="card-actions">
              <Link to="/home-design" className="btn bg-slate-800 text-white">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={PetsProjectImg}
              alt="Pets Project Image"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pets Project</h2>
            <div className="card-actions">
              <Link to="/pets" className="btn bg-slate-800 text-white">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={BookishProjectImg}
              alt="Gadgets Project Image"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Bookist Project</h2>
            <div className="card-actions">
              <Link to="/gadgets" className="btn bg-slate-800 text-white">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
